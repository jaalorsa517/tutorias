from api.bd import users
from flask_httpauth import HTTPBasicAuth

auth = HTTPBasicAuth(realm='No tienes permiso')

@auth.verify_password
def verify_password(user, passw):
    if user in users and users.get(user) == passw:
        return user