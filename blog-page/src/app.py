from flask import Flask, render_template, request, redirect, url_for
from email_marketing.email_sender import send_email

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/subscribe', methods=['POST'])
def subscribe():
    email = request.form.get('email')
    if email:
        send_email(email)
        return redirect(url_for('home'))
    return redirect(url_for('home'))

if __name__ == '__main__':
    app.run(debug=True)