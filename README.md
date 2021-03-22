# Relex Server Setup Guide
You can read this guide and clone the files from its github repo [here](https://github.com/Melina-Jingting/ReLex).
For this project, we will be using the Django, a light-weight web application framework which runs on Python.

## Toolkit Installation

### Browser
This guide contains screenshots taken from Mozilla Firefox but it should work for any other commonly-used browser.
There may be some minor differences in terms of alignments and element rendering, so it is encouraged that the team
sticks to one particular browser for testing.

### PostgreSQL
This guide assumes PostgreSQL has already been installed. If not, follow the separate installation guide for it to set up PostgreSQL.

### Python
Python 3.9.1 is used in this project but it should work with any Python>=3.5 versions. Do NOT use Python2,
upgrade your version if it is Python 2 and below as there are no guarantees that this guide can work with Python2.

You can download Python from [here](https://www.python.org/downloads/).

### Node.js and npm
This guide assumes Node.js and npm has already been installed. If not, follow the separate installation guide to set it up. The download link can be found here:
https://www.npmjs.com/get-npm

### NPM Setup Commands
Navigate to the `frontend` directory and run the following commands:
npm init -y (Skip this command, if you are not setting up a new project)
npm i webpack webpack-cli --save-dev
npm i @babel/core babel-loader @babel/preset-env @babel/preset-react --save-dev
npm i react react-dom --save-dev
npm install @material-ui/core
npm install @babel/plugin-proposal-class-properties
npm install react-router-dom
npm install @material-ui/icons

for a more comprehensive guide, refer to the following resource:
https://www.youtube.com/watch?v=6c2NqDyxppU

if you encounter error messages similar to the following:
npm ERR! code EEXIST
npm ERR! Refusing to delete C:\blahhh ... : is outside C:\blahhh ... and not a link
npm ERR! File exists: C:\blahhh ...
npm ERR! Remove the existing file and try again, or run npm
npm ERR! with --force to overwrite files recklessly.

Try the following command:
`npm run dev --force`

if error persists, delete the `node_modules` folder and `package-lock.json` file
and perform a reinstall with the following command:
`npm install @angular/core@5.2.3 --save` --save is optional for newer versions

If error states that wbpack is required, try:
`npm install --save-dev webpack`
`npm audit fix [--force]` if necessary

`npm install --save react-linkedin-login-oauth2`

`npm install --save-dev react-linkedin-login-oauth2`

`npm install --save file-loader url-loader`
`npm install --save style-loader css-loader`

Make sure you have the es2015 babel preset installed:
`npm install babel-preset-es2015`

## Sample Web App Walk-through
This should be the directory structure of the files:
* RELEX/
    * accounts/
        * ...
    * relex_server/
        * ...
    * resumes/
        * ...
    * sent_emails/
        * ...
    * templates/
        * ...
    * .gitignore
    * manage.py
    * README.md

### Change web app and database configurations
Open `relex_server/settings.py` and locate the following lines of codes:

```
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'relexdb',
        'USER': 'postgres',
        'PASSWORD': '<password>', # INSERT YOUR DB PASSWORD HERE
        'HOST': 'localhost',
        'PORT': '5432',
    }
}
```

On line 89 of `relex_server/settings`, change `<password>`, (and `NAME`, `USER`,  and `PORT` when neccessary) to your database configurations.
If you did not make any changes to `<port>` during the setup, it should be `5432` by default.

### Start web app and handle routing
To run the web service, both the frontend (react) and the backend (django) has to be deployed.

First, navigate to the `frontend` directory and run the following command:
`npm run dev`

Next, navigate to the `ReLex` directory and run the following command:
`python manage.py runserver`

You should see some messages showing up in your terminal, with these last few lines:

```
 * Watching for file changes with StatReloader

```
There may be warnings but you can ignore those.

Open your web browser, press Ctrl + L (or Command + L on macOSX), paste the following URL: http://localhost:8000/ and press enter.
You should see a login page if your app is running successfully!
