from flask_restful import Resource
from auth import auth

class Car (Resource):

    decorators = [auth.login_required]

    def get(self):
        return (dict(state='OK'),200,{})