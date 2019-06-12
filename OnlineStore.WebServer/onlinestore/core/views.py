from django.contrib.auth.models import User
from django.db.models import Q
import json
from rest_framework.views import APIView
from .viewmodels import RegisterVm, ApiResponse
from .utils import isEmail, logError, jsonResponse
from functools import wraps


class Signup(APIView):
    def post(self, request):

        requestData = json.loads(request.body)

        try:
            existingUsers = User.objects.filter(Q(email=requestData['email']) | Q(username=requestData['username']))

            if len(existingUsers) > 0:
                return jsonResponse(ApiResponse(errors='User with the given username or email already exists'))

            if not isEmail(requestData['email']):
                return jsonResponse(ApiResponse(errors='Invalid email'))

            user = User(
                username=requestData['username'],
                email=requestData['email'])
            user.set_password(requestData['password1'])
            user.save()
        except Exception as err:
            logError(type(err).__name__, err.args)
            return jsonResponse(ApiResponse(
                errors='An error occurred during signing up'
            ))

        return jsonResponse(ApiResponse(responseObject=RegisterVm(user.username, user.email)))