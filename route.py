from flask import Flask, render_template, url_for
from flask_sqlalchemy import SQLAlchemy
from flask_login import UserMixin
from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, SubmitField
from wtforms.validators import InputRequired, Length, ValidationError
from flask_bcrypt import Bcrypt



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
    username = db.Column(db.String(20), nullable=False, unique=True)
    #password to have a max of 80 characters
    password = db.Column(db.String(80), nullable=False)
 
 #This class inherits from FlaskForm                         
class Join_as_vendor(FlaskForm):
    username = String(validators=[
                    InputRequired(), Length(min=4, max=20)], render_kw={"placeholder": "username"})
    
    password = PasswordField(validators=[
                             InputRequired(), Length(min=8, max=20)], render_kw={"placeholder": "Password"})
    
    submit = SubmitField("Register")
    
    #Validates username inputs by checking the database
    def  validate_username(self, username):
        existing_user_username = User.query.filter_by(
            username=username.data).first()
        #if there is a similar username:
        if existing_user_username:
            raise ValidationError(
                'That username already exists. Please choose a different one.') 
            
          
#routes to a Vendor dashboard after login            
@app.route('/dashboard', methods=['GET', 'POST'])
@login_required
def dashboard():
    return render_template('dashboard.html')

#routes pages to log-in page when a vendor gets loged out
@app.route('/logout', methods=['GET', 'POST'])
@login_required
def logout():
    logout_user()
    return redirect(url_for('login'))
                               
#routes to home page
app.route('/')
def home():
    return render_template('home.html')

#routes page to login page
app.route('/login', methods=['GET', 'POST'])
def login():
    return render_template('login.html')

#routes to sign-up for new vendors
app.route('/Join as Vendor', methods=['GET', 'POST'])
def Join_as_vendor():
    return render_template('')
    
if __name__ == '__main__':
    app.run(debug=True)

