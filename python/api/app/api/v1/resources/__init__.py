from flask_restful import Resource,request

class Nombre (Resource):
    name = None
    def get(self):
        return (Nombre.name or 'Listo la api',200)

    def post(self):
        dato = request.get_json()
        Nombre.name = dato['nombre']
        return ({},201,dict(message='Todo bien'))
