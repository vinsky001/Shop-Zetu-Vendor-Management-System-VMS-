from flask import Flask, render_template, url_for
from flask_sqlalchemy import SQLAlchemy
from flask_login import UserMixin


app = Flask(__name__)
#Connects our app file to the database
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
app.config['SECRET_KEY'] = 'thisisasecretkey'

#creates an instance of the database
db = SQLAlchemy(app)

#Let's create database table
class User(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    #Username to have a maximum of 20 characters
    username = db.Column(db.String(20), nullable=False)
    #password to have a max of 80 characters
    password = db.Column(db.String(80), nullable=False)
                         
                         

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

