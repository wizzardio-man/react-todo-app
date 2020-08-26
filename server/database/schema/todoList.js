'use strict';

const mongoose = require('mongoose');

const TodoListSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: {
        type: String,
        required: true
    },
    timespamp: {
        type: Date,
        default: Date.now
    },
});

const TodoList = mongoose.model('TodoList', TodoListSchema);

module.exports = TodoList;