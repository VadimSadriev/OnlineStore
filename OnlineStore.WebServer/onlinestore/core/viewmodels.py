class ApiResponse:

    def __init__(self, errors=None, response_object=None):
        self.errors = errors
        self.responseObject = response_object
        self.success = self.errors is None