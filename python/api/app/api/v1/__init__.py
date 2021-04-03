from flask_restful import Api
from flask import make_response,jsonify
from app import app

api = Api(app)

from app.api.v1.resources import Nombre

@api.representation('application/json')
def out_json(data, code, headers=None):
    resp = make_response(
        jsonify(
            dict(status='ok',code = code, data = data)
            )
    )
    resp.headers.extend(headers or {})
    return resp

api.add_resource(Nombre,'/api/v1/nombres')