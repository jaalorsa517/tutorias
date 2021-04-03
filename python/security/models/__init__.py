from werkzeug.security import generate_password_hash

users = dict(fulano=generate_password_hash('123'))