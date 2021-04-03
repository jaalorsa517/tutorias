from flask_restful import Api
from app.api import api_blue

api = Api(api_blue)

from .resources.login import Login
from .resources.users import Users

api.add_resource(Login,'/login',endpoint="login")
api.add_resource(Users,'/users/<string:user>',endpoint="users")