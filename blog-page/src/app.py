from flask import Flask, render_template, request, redirect, url_for
from flask_wtf import CSRFProtect
from email_marketing.email_sender import send_email

app = Flask(__name__)
app.config['SECRET_KEY'] = 'your_secret_key'
csrf = CSRFProtect(app)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/subscribe', methods=['POST'])
def subscribe():
    email = request.form.get('email')
    print(f"Form submitted. Email: {email}")  # Debugging line
    if email:
        subject = "Subscription Confirmation"
        body = "Thank you for subscribing to our newsletter!"
        send_email(email, subject, body)
        print(f"Email sent to: {email}")  # Debugging line
        return redirect(url_for('home'))
    print("No email provided")  # Debugging line
    return redirect(url_for('home'))

if __name__ == '__main__':
    app.run(debug=True)