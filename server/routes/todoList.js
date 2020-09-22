'use strict';

const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const { models } = require('../database/index');
const { TodoItem, TodoList } = models;

router.post('/todolist', async (req, res) => {
    const { title } = req.body;
    const newTodoList = new TodoList({
        title: title,
        _id: new mongoose.Types.ObjectId().toHexString() 
    });

    try {
        await newTodoList.save();
        res.send({ msg: `Created Todo List with title ${title}`});
    } catch(err) {
        console.log(err);
        res.status(500).send({ err: JSON.stringify(err)});
    }
});

router.get('/todolist/:id', async (req, res) => {
    const { id } = req.params;
    console.log(`Received GET call to get Todolist with an ID ${id}`);

    try {
        const todoList = await TodoList.findOne({ _id: id }).exec();
        res.send({ todoList });
    } catch(err) {
        console.log(err);
        res.status(500).send({ err: JSON.stringify(err) });
    }
});

router.get('/todolist', async (req, res) => {
    try {
        const todolists = await TodoList.find({}).exec();
        res.send(todolists);
    } catch(err) {
        console.log(err);
        res.status(500).send({ err: JSON.stringify(err) });
    }
});

router.delete('/todolist/:id', async (req, res) => {
    const { id } = req.params;

    try {
        await TodoList.deleteOne({ _id: id }).exec();
        await TodoItem.deleteMany({ todoList: id }).exec();
        res.send({ msg: `Todo List with an id ${id} was deleted` });
    } catch(err) {
        console.log(err);
        res.status(500).send({ err: JSON.stringify(err) });
    }
});

module.exports = router;