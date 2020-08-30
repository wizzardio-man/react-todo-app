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

    const submitNewItem = async (task) => { // listId: 5f4c144a167c7f7cbc9614e8
        const newItem = { title: task, isDone: false, isDeleted: false };
        const res = await axios.post(TODO_ITEM_URI, newItem);
        const [ item ] = res.data;
        setItems([...items, item ]);
    }

    const deleteItem = async (id) => {
        const copyItems = [...items];
        const index = copyItems.findIndex(i => i._id === id);
        const item = copyItems[index];
        await axios.delete(`${TODO_ITEM_URI}/${item._id}`);
        item.isDeleted = true;
        copyItems[index] = item;
        setItems(copyItems);
    }

    const doneItem = id => {
        console.log(`called done with id ${id}`)
        const copyItems = [...items];
        const index = copyItems.findIndex(i => i.id === id);
        const item = copyItems[index];
        item.isDone = true;
        copyItems[index] = item;
        setItems(copyItems);
    }

    const newItems = items.filter(i => i.isDone === false && i.isDeleted === false);
    const doneItems = items.filter(i => i.isDone === true && i.isDeleted === false);
    const actionHandlers = {
        onDelete: deleteItem,
        onDone: doneItem
    };

    return (
        <div className='wrapper'>
            <div className='card frame'>
                { newItems.length > 0 ? (
                    <div>
                        <Header msg={`You have ${newItems.length} items to do`} />
                        <TodoList {...actionHandlers} items={newItems} />
                    </div>
                ) : (
                    <div />
                )}
                 { doneItems.length > 0 ? (
                    <div>
                        <Header msg={`You have done ${doneItems.length} items`} />
                        <TodoList {...actionHandlers} items={doneItems} />
                    </div>
                ) : (
                    <div />
                )}
                <SubmitForm onFormSubmit={submitNewItem} />
            </div>
        </div>
    );
}