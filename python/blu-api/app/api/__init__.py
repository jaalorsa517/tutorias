from flask import Blueprint
from flask_restful import Api

blu_api = Blueprint('api',__name__,url_prefix='/api/v1')

api = Api(blu_api)

from app.api.v1 import register_ulrs

register_ulrs()