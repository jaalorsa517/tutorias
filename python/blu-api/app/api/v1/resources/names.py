from flask_restful import Resource

class Names (Resource):
    def get(self):
        return dict(saludo='Hello Api')
    
    def post(self):
        pass
    
    def put(self):
        pass