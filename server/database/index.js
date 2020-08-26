'use strict';

require('dotenv').config();

const mongoose = require('mongoose');

const TodoItem = require('./schema/todoItem');
const TodoList = require('./schema/todoList');

const connectDb = () => {
    return mongoose.connect(process.env.DATABASE_URL);
};

const models = { TodoItem, TodoList };

module.exports = {
    connectDb,
    models
};