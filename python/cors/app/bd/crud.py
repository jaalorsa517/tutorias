from sqlite3 import connect
from os import getcwd


def __connect():
    return connect(getcwd() + "/app/bd/cors_db.db")


def newUser(name, last_name, year):
    try:
        with __connect() as con:
            cur = con.cursor()
            cur.execute(
                "INSERT INTO users(first_name,last_name,years) VALUES (?,?,?)",
                [name, last_name, year])
            con.commit()
        return True
    except Exception as e:
        print("Error al crear usuario")
        return False


# def getUsers(limit, first, last):
def getUsers():
    with __connect() as con:
        cur = con.cursor()

        cur.execute(
            f"SELECT * FROM users")
        # cur.execute(
        #     f"SELECT * FROM users WHERE id >= {first} and id <{last} limit {limit}")
        rows = cur.fetchall()
    return [dict(id=row[0], name=row[1], last_name=row[2], year_old=row[3]) for row in rows]
