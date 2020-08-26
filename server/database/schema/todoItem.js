'use strict';

const mongoose = require('mongoose');

const TodoItemSchema = new mongoose.Schema({ 
    _id: mongoose.Schema.Types.ObjectId,
    title: {
        type: String,
        required: true
    },
    timespamp: {
        type: Date,
        default: Date.now
    },
    todoList: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'TodoList' 
    }
});

const TodoItem = mongoose.model('TodoItem', TodoItemSchema);

module.exports = TodoItem;