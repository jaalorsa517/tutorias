from app.api.v1.resources.names import Names
from app.api import api

def register_ulrs():
    api.add_resource(Names,'/names', endpoint='names')