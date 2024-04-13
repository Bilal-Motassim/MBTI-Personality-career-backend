const express = require('express');
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");


const testRouter = require('./routers/testRouter');
const questionRouter = require('./routers/questionRouter');
const optionRouter = require('./routers/optionRouter');


require("dotenv").config();

const app = express();

require("dotenv/config");
const api = process.env.API_URL;

app.use(bodyParser.json());
app.use(cors());
app.options("*", cors());
app.use(express.json());
app.use(morgan("tiny"));

app.use(`${api}/test`, testRouter);
app.use(`${api}/question`, questionRouter);
app.use(`${api}/option`, optionRouter);



module.exports = app;