// Update with your config settings.
require("dotenv").config();

module.exports = {
  client: 'pg',
  connection: 
   process.env.DATABASE_URL ||
  `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@127.0.0.1:5432/names`,
  searchPath: "public",
  migrations: {
      directory: "./migrations",
  },
  seeding: {
      directory: './seeds',
  },
};

//*********************** */
//following lines configure all requests coming from and going to app.js file into knex
// const config = require('../knexfile');
// this instantiates knex with the config argument
// const knex = require('knex')(config);
//added to index.js on lines 6 and 7