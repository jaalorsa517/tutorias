from flask_restful import Resource
from app.auth import auth

class Hobbies(Resource):

    decorators = [auth.login_required(role=['admin', 'user'])]

    def get(self, user):
        if user == auth.current_user():
            return dict(hobbie= "nadar"), 200