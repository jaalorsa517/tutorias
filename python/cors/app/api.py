from flask_restful import Api
from app import app

api = Api(app)

from .resources.users import Users

api.add_resource(Users, '/users', endpoint='users')