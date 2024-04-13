const http = require('http');
const port = 5000;
const app = require('./app');
const mongoose = require('mongoose');
const { error } = require('console');

const server = http.createServer(app);

require("dotenv/config");
const db = process.env.DB_URL;
console.log(db, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connect(db).catch((error) => {
    console.log(error);
});
mongoose.connection.once("open", () => {
    console.log("Connected tdddo db");
});


server.listen(5000, () => {
    console.log(`Server listening on ${port}`);
});