from flask_httpauth import HTTPBasicAuth
from werkzeug.security import check_password_hash
from models import users

auth = HTTPBasicAuth(realm='Sin autorizacion')

@auth.verify_password
def verify(user,passw):
    if user in users and check_password_hash(users[user],passw):
        return user