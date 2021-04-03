from flask_restful import Resource, request, reqparse
from app.bd.crud import getUsers, newUser


class Users(Resource):
    paging = 1
    first_user = 0
    last_user = 25

    def get(self):
        limit = request.args.get('limit')
        if not limit:
            limit = 25
        else:
            int(limit)

        data = getUsers()

        # data = getUsers(limit=limit, first=Users.first_user,
        #                 last=Users.last_user)
        # Users.paging += 1
        # Users.first_user += limit
        # Users.last_user += limit
        
        # return dict(data=data, page=Users.paging, limit=limit), 200, {"Access-Control-Allow-Origin": "*"}
        # return dict(data=data, page=Users.paging, limit=limit), 200, {"Access-Control-Allow-Origin": "http://localhost:8080"}
        return dict(data=data, page=Users.paging, limit=limit), 200, {}

    def post(self):
        name = request.get_json().get('name')
        last_name = request.get_json().get('last_name')
        year = request.get_json().get('year')
        if newUser(name, last_name, year):
            # return dict(msg="Recurso creado"), 201, {"Access-Control-Allow-Origin": "http://localhost:8080"}
            return dict(msg="Recurso creado"), 201, {}
        else:
            return dict(msg="Hubo un error al guardar, revise los datos"), 401, {"Access-Control-Allow-Origin": "http://localhost:8080"}
            # return dict(msg="Hubo un error al guardar, revise los datos"), 401, {}
