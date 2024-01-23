import psycopg2

DB_HOST = 'localhost'
DB_NAME = 'db'
DB_USER = 'postgres'
DB_PASSWORD = '99iCloud'


class DB:
    @staticmethod
    def create_connection():
        conn = psycopg2.connect(
            host=DB_HOST, database=DB_NAME, user=DB_USER, password=DB_PASSWORD)
        return conn

    @staticmethod
    def create_tables():
        conn = DB.create_connection()
        cur = conn.cursor()

        cur.execute('''
            CREATE TABLE IF NOT EXISTS users (
                id SERIAL PRIMARY KEY,
                username VARCHAR(50) UNIQUE NOT NULL,
                password VARCHAR(100) NOT NULL,
                email VARCHAR(100) UNIQUE NOT NULL
            )
        ''')

        conn.commit()
        cur.close()
        conn.close()