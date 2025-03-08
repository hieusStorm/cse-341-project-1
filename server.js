const express = require("express");
const mongodb = require("./data/database");

const app = express();

const port = process.env.port || 3000;

app.use('/', require('./routes'));

mongodb.initDb((err) => {
    if(err) {
        console.error(err);
    } else {
        app.listen(port, () => console.log(`Database listening and node running on port: ${port}`));
    }
});