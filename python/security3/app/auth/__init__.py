from flask_httpauth import HTTPTokenAuth
from app import token_serializer
from app.bd.users import users

auth = HTTPTokenAuth(scheme='Bearer')

@auth.verify_token
def verify_token(token):
    try:
        data = token_serializer.loads(token)
        for user in users:
            if data.get('user') == user.get('user'):
                return user.get('user')
    except:
        return False