from flask_restful import Resource,request
from app.bd.users import users
from app import token_serializer

class Login (Resource):

    def post(self):
        _user = request.get_json().get('user')
        _passw = request.get_json().get('password')

        for user in users:
            if _user == user.get('user') and _passw == user.get('passw'):
                token = token_serializer.dumps(dict(user = _user)).decode('utf-8')
                return dict(message='Estas registado!', token = token), 201
        return dict(message = 'No te encuentras en nuestra base de datos'),400 
