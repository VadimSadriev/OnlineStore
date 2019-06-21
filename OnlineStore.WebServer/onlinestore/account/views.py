from django.contrib.auth.models import User
from django.db.models import Q
from django.contrib.auth import login, logout
import json
from rest_framework.views import APIView
from ..core.viewmodels import ApiResponse
from ..core.utils import log_error, json_response
from .viewmodels import RegisterVm, LoginVm
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import IsAuthenticated


class Login(APIView):
    def post(self, request):

        request_data = json.loads(request.body)
        try:
            existing_users = User.objects.filter(Q(email=request_data['userNameOrEmail'])
                                                | Q(username=request_data['userNameOrEmail']))

            if not len(existing_users) == 1:
                return json_response(ApiResponse(errors=['Failed to login']))

            user = existing_users[0]

            auth_token = self.get_tokens_for_user(user)
            login(request, user)

        except Exception as err:
            log_error(error_name='Login error', errors=err.args)

        return json_response(ApiResponse(response_object=LoginVm(
            username=user.username,
            email=user.email,
            authToken=auth_token)))

    def get_tokens_for_user(self,user):
        refresh = RefreshToken.for_user(user)

        return {
            'refresh': str(refresh),
            'access': str(refresh.access_token),
        }


class Signup(APIView):
    def post(self, request):
        request_data = json.loads(request.body)

        try:
            existing_users = User.objects.filter(Q(email=request_data['email']) | Q(username=request_data['username']))

            if len(existing_users) > 0:
                return json_response(ApiResponse(errors='User with the given username or email already exists'))

            if not log_error(request_data['email']):
                return json_response(ApiResponse(errors='Invalid email'))

            user = User(
                username=request_data['username'],
                email=request_data['email'])
            user.set_password(request_data['password1'])
            user.save()

            auth_token = self.get_tokens_for_user(user)
            login(request, user)
            
        except Exception as err:
            log_error(type(err).__name__, err.args)
            return json_response(ApiResponse(
                errors='An error occurred during signing up'
            ))

        return json_response(ApiResponse(response_object=RegisterVm(user.username, user.email, auth_token)))