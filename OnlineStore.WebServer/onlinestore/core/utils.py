import re
import json
from datetime import datetime
from rest_framework.response import Response


class CustomEncoder(json.JSONEncoder):

    def default(self, o):
        if isinstance(o, datetime):
            return o.isoformat()

        return o.__dict__


def json_response(object):
    return Response(json.dumps(object, cls=CustomEncoder))


def is_email(email):
    return True if re.match("^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$", email) else False


def log_error(error_name, errors):
    try:
        with open('errors.txt', 'a+') as f:
            f.write(f"\n{datetime.now()} - {error_name}: {','.join(str(x) for x in errors)}")
    except Exception as e:
        pass