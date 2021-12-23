# Setup instructions for a React App

https://reactjs.org/docs/create-a-new-react-app.html

## Front end: React

npx create-react-app app-name
cd into app repo
npm install
npm start

## Server

npm install express

## Backend

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

### Seeds

add create seed and seeding scripts to package.json
add db.seed.run() to index.js 

## Environmental variables config

npm install dotenv
create .env file and

## API endpoints

Bring in the knex config
app.use(express.json());
Create get request
