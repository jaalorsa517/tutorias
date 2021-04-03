from flask import Flask

app = Flask(__name__)


from app.api import blu_api

app.register_blueprint(blu_api)

@app.route('/')
def index():
    return 'Hello World'