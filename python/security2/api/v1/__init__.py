from flask_restful import Api
from api import api

api_datos = Api(api)

from .resources.users import Users

api_datos.add_resource(Users,'/users')