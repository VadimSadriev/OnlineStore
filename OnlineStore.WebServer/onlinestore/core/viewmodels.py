class RegisterVm:

    def __init__(self, username, email, authToken=None):
        self.username = username
        self.email = email
        self.authToken = authToken


class ApiResponse:

    def __init__(self, errors=None, responseObject=None):
        self.errors = errors
        self.responseObject = responseObject
        self.success = self.errors is None