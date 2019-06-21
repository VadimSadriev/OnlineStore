class RegisterVm:

    def __init__(self, username, email, auth_token=None):
        self.username = username
        self.email = email
        self.authToken = auth_token


class LoginVm:

    def __init__(self, username, email, auth_token):
        self.username = username
        self.email = email
        self.authToken = auth_token