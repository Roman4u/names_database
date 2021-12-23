require("dotenv").config();
const { application } = require("express");
const app = require("./app"); 
const db = require("./knex");

const PORT = process.env.PORT || 4000;

(async () => {
    try {
        console.log("Running migrations");
        await db.migrate.latest();

        console.log("starting express...");
        app.listen(PORT, () => 
        console.log(`Listening on port ${PORT}`)
        );
        
    } catch (error) {
        console.error("Error starting app", err);
        process.exit(-1);
    }
})();
