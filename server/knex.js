const config = require('../knexfile');
//this instantiates knex with the config argument
const knex = require('knex')(config);

module.exports = knex;