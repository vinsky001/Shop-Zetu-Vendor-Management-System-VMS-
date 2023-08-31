from flask import Flask, render_template


app = Flask(__name__)

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

