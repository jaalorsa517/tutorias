from flask import Flask

api = Flask(__name__)

from .v1 import api_datos