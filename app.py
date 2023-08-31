from flask import Flask, render_template, url_for
from flask_sqlalchemy import SQLAlchemy


app = Flask(__name__)
db = SQLAlchemy(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'

app.route('/')
def home():
    return render_template()


app.route('/login', methods=['GET', 'POST'])
def login():
    return render_template()


app.route('/Join as Vendor', methods=['GET', 'POST'])
def Join_as_vendor():
    return render_template()
    
if __name__ == '__main__':
    app.run(debug=True)

