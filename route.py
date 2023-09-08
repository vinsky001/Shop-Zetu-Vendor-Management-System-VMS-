from flask import Flask, render_template, url_for, flash
from flask_sqlalchemy import SQLAlchemy
from flask_login import UserMixin, LoginManager
from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, SubmitField
from wtforms.validators import InputRequired, Length, ValidationError
from flask_bcrypt import Bcrypt
from forms import Join_as_Vendor
from forms import LoginForm
from functools import wraps
from flask_mail import Mail, Message 
#from instance import db



app = Flask(__name__)
#Connects our app file to the database
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
app.config['SECRET_KEY'] = '18f3e4d01227bda3eabd490c'
app.config['MAIL_SERVER'] = 'smtp.gmail.com.'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USERNAME'] = 'ekibet544@gmail.com'
app.config['MAIL_PASSWORD'] = '99icloud' 
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USE_SSL'] = False


#creates an instance of the database
db = SQLAlchemy(app)
#creates an instance of bcrypt
bcrypt = Bcrypt(app)
login_manager = LoginManager(app)
mail = Mail(app)

def password_setter(func):
    @wraps(func)
    def wrapper(self, plain_text_password):
        self.password = bcrypt.generate_password_hash(plain_text_password).decode('utf-8')
        return func(self, plain_text_password)
    return wrapper

#Let's create database table
class User(db.Model, UserMixin):
    __tablename__ = 'users'
    
    id = db.Column(db.Integer, primary_key=True)
    #Username to have a maximum of 20 characters
    username = db.Column(db.String(20), nullable=False, unique=True)
    email = db.Column(db.String(100), unique=True)
    brand = db.Column(db.String(20), nullable=False, unique=True)
    #password to have a max of 80 characters
    password = db.Column(db.String(80), nullable=False)
    
   
    @property
    def password(self):
        return self.password
    
    @password_setter
    def password(self, plain_text_password):
        self.password = bcrypt.generate_password_hash(plain_text_password).decode('utf-8')

    def check_password_correction(self, attempted_password):
        return bcrypt.check_password_hash(self.password_harsh, attempted_password)
    
with app.app_context():
    db.create_all()
    db.session.commit()     
            
          
#routes to a Vendor dashboard after login            
@app.route('/dashboard', methods=['GET', 'POST'])
#@login_required
def dashboard():
    return render_template('dashboard.html')


  
#routes to home page
app.route('/')
def home():
    return render_template('home.html')

#routes page to login page
app.route('/login', methods=['GET', 'POST'])
def login():
    form = LoginForm()
    #lets catch some errors that may arise while signing in
    if form.Validate_on_submit():
        attempted_user = User.query.filter_by(username=form.username.data).first()
        if attempted_user and attempted_user.check_password_correction(
            attempted_password=form.password.data
        ):
            login_user(attempted_user)
            flash('f Success! You are logged in as: {attempted_user.username}', category='success')
            return redirect(url_for('dashboard_page'))
        else:
            flash('Username and password are not match! Please try again', category='danger')
         
    return render_template('login.html', form=form)

#routes pages to log-in page when a vendor gets loged out
@app.route('/logout', methods=['GET', 'POST'])
#@login_required
def logout():
        logout_user()
        flash("You have been logged out!", category='info')
        return redirect(url_for('home_page'))
    
 #contact form and send emails with Flask for support or feedback   
@app.route('/contact', methods=['GET', 'POST']) 
def contact():
    if request.method == 'POST':
        name = request.form.get('name')
        email = request.form.get('email')
        phone = request.form.get('phone')
        message = request.form.get('message')
        
        subject = f"Mail from {name}"
        body = f"Name: {name}\nE-mail: {email}\nPhone: {phone}\n\n\n{message}"
        sender = mail_username
        recipients = ['ekibet544@gmail.com']
        # Create an email message
        msg = Message(subject=subject, body=body, sender=sender, recipients=recipients)

        mail.send(msg)              
        return render_template('contact.html')   
    
    

#routes to sign-up for new vendors
app.route('/Join as Vendor', methods=['GET', 'POST'])
def Join_as_vendor():
    def join_as_vendor_page():
        form = Join_as_Vendor()
        if form.validate_on_submit():
            user_to_create = User(username=form.username.data,
                                  email_address=form.email_address.data,
                                  password=form.password1.data,
                                  brandname=form.brand_name.data)
            db.session.add(user_to_create)
            db.session.commit()
            return redirect (url_for('login'))
        if form.errors != {}: #Checks if there are no errors from the validations
            for err_msg in form.errors.values():
                flash(f'There was an error with creating a user: {err_msg}')
                     
                
    return render_template('Join_as_vendor.html', form=form)
    
if __name__ == '__main__':
    app.run(debug=True)

