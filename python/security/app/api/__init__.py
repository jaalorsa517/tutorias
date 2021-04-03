from flask_restful import Api
from app import app

api = Api(app)


from app.api.resources import Car

api.add_resource(Car,'/car')


