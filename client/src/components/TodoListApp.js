import React from 'react';
import { useParams } from 'react-router-dom';

import TodoList from './items/TodoList';
// import SubmitForm from './SubmitForm';

const TodoListApp = () => {
    let { listId } = useParams();
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-6">
                    <div className='todolist'>
                        <TodoList listId={listId} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TodoListApp;