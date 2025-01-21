# Blog Page Project

This project is a simple blog page that includes an automated email marketing system. It is built using HTML, CSS, JavaScript, and Python with Flask.

## Project Structure

```
blog-page
├── src
│   ├── templates
│   │   └── index.html        # HTML structure of the blog page
│   ├── static
│   │   ├── css
│   │   │   └── styles.css    # CSS styles for the blog page
│   │   └── js
│   │       └── scripts.js     # JavaScript for client-side interactivity
│   ├── app.py                # Main entry point for the Python application
│   └── email_marketing
│       ├── __init__.py       # Marks the directory as a Python package
│       └── email_sender.py    # Functions for sending marketing emails
├── requirements.txt           # Lists project dependencies
└── README.md                  # Documentation for the project
```

## Setup Instructions

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install the required dependencies using pip:

   ```
   pip install -r requirements.txt
   ```

4. Run the application:

   ```
   python src/app.py
   ```

5. Open your web browser and go to `http://127.0.0.1:5000` to view the blog page.

## Usage

- Users can read blog posts and subscribe to the email list using the subscription form.
- The email marketing system will send automated emails to subscribers.

## Contributing

Feel free to submit issues or pull requests for improvements or bug fixes.