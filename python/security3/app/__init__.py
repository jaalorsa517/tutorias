from flask import Flask
from itsdangerous import TimedJSONWebSignatureSerializer as Serializer

app = Flask(__name__)

app.config['SECRET_KEY'] = 'ATUQLEQ'

token_serializer = Serializer(app.config['SECRET_KEY'],expires_in=60)

from app.api import api_blue
app.register_blueprint(api_blue)

@app.route('/')
def index():
    return 'Hello world'