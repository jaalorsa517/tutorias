from flask_restful import Resource
from app.auth import auth

class Users(Resource):

    decorators=[auth.login_required]

    def get(self,user):
        if user == auth.current_user():
            return dict(nombre="",direccion="Calle a la subida",telefono="xxxxxx")
        else:
            return dict(message='No eres el usuario registrado')