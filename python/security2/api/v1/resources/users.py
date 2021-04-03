from api.auth import auth
from flask_restful import Resource

class Users (Resource):

    decorators=[auth.login_required]

    def get(self):
        return dict(nombre=auth.current_user())