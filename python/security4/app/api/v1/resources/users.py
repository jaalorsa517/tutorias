from flask_restful import Resource
from app.auth import auth

class Users(Resource):

    method_decorators={
        'get' : [auth.login_required(role='admin')],
        'post': [auth.login_required(role='user')]
    }

    def get(self,user):
        if user == auth.current_user():
            return dict(nombre=auth.current_user(),direccion="Calle a la subida",telefono="xxxxxx")
        else:
            return dict(message='No eres el usuario registrado')

    
    def post (self,user):
        if user == auth.current_user():
            return dict(message='Todo esta muy bien'),200
        else:
            return dict(message='No tienes permiso!'),401