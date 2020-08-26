'use strict';

require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');

const todoItem = require('./server/routes/todoItem');
const todoList = require('./server/routes/todoList');

const { connectDb } = require('./server/database/index');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/server', todoList);
app.use('/server', todoItem)

connectDb().then(async () => {
    console.log(`Connected to MongoDB Database via ${process.env.DATABASE_URL}`);
    app.listen(PORT, () => {
        console.log(`Server running at ${PORT}`)
    });
});