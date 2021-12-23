# Setup instructions for a React App

https://reactjs.org/docs/create-a-new-react-app.html

## Installing front end: React

npx create-react-app app-name
cd into app repo
npm install
npm start

## Installing server

npm install express

## Setting up backend

npm install knex
npx knex init
configure knex file

### Migrations

add a script to package.json:
"migrate": "knex migrate:make"
run knex migrate:make in the terminal
npm run migrate <initial-migration>
add migrate script to pachage.json
"latest": "knex migrate:latest"

## Configure environmental variables

npm install dotenv
create .env file and
