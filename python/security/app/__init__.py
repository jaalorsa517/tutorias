from flask import Flask
from auth import auth

app = Flask(__name__)

@app.route('/')
@auth.login_required
def index():
    return "Hello, {}!".format(auth.current_user())