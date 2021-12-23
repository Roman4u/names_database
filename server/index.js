require("dotenv").config();
const { application } = require("express");
const app = require("./app"); 

const config = require('../knexfile');
const db = require('knex')(config);


const PORT = process.env.PORT || 4000;

(async () => {
    try {
        console.log("Running migrations");
        await db.migrate.latest();

        console.log("Running seeds");
        await db.seed.run();
        
        console.log("starting express...");
        app.listen(PORT, () => 
        console.log(`Listening on port ${PORT}`)
        );
        
    } catch (error) {
        console.error("Error starting app", error);
        process.exit(-1);
    }
})();
