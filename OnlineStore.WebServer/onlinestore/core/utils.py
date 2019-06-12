import re
import json
from datetime import datetime
from rest_framework.response import Response


class CustomEncoder(json.JSONEncoder):

    def default(self, o):
        if isinstance(o, datetime):
            return o.isoformat()

        return o.__dict__


def jsonResponse(object):
    return Response(json.dumps(object, cls=CustomEncoder))


def isEmail(email):
    return True if re.match("^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$", email) else False


def logError(errorName,errors):
    try:
        with open('errors.txt', 'a+') as f:
            f.write(f"\n{datetime.now()} - {errorName}: {','.join(str(x) for x in errors)}")
    except Exception as e:
        pass