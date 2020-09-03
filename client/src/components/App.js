import React, { useState, useEffect } from 'react';
import axios from 'axios';

import TodoList from './TodoList';
import Header from './Header';
import SubmitForm from './SubmitForm';

const TODO_ITEM_URI = 'http://localhost:5000/server/todoitem';

export default function App() {
    const [ items, setItems ] = useState([]);
    useEffect(() => {
        fetch(TODO_ITEM_URI)
          .then(response => response.json())
          .then(data => setItems(data));
    }, []);

    /**
     * TODO:
     * 1. send data to server after state updates; 
     */
    const submitNewItem = async (task) => {
        const newItem = { title: task, isDone: false, isDeleted: false };
        const res = await axios.post(TODO_ITEM_URI, newItem);
        const [ item ] = res.data;
        setItems([...items, item ]);
    }

    const deleteItem = async (id) => {
        const copyItems = items.map(elem => {
            if (elem._id === id) {
                elem.isDeleted = true;
            }
            return elem;
        });
        await axios.delete(`${TODO_ITEM_URI}/${id}`);
        setItems(copyItems);
    }

    const doneItem = async (id) => {
        const copyItems = items.map(elem => {
            if (elem._id === id) {
                elem.isDone = true;
            }
            return elem;
        });
        await axios.put(`${TODO_ITEM_URI}/${id}`, { isDone: true });
        setItems(copyItems);
    }

    const newItems = items.filter(i => !i.isDone && !i.isDeleted);
    const doneItems = items.filter(i => i.isDone && !i.isDeleted);
    const actionHandlers = {
        onDelete: deleteItem,
        onDone: doneItem
    };

    return (
        <div className='wrapper'>
            <div className='card frame'>
                { newItems.length > 0 && (
                    <div>
                        <Header msg={`To do: ${newItems.length}`} />
                        <TodoList {...actionHandlers} items={newItems} />
                    </div>
                )}
                { doneItems.length > 0 && (
                    <div>
                        <Header msg={`Done: ${doneItems.length}`} />
                        <TodoList {...actionHandlers} items={doneItems} />
                    </div>
                )}
                <SubmitForm onFormSubmit={submitNewItem} />
            </div>
        </div>
    );
}