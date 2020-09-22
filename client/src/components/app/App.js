import React from 'react';
import { useParams } from 'react-router-dom';

import Lists from '../lists/Lists';
import TodoList from '../items/TodoList';

import SubmitForm from '../common/SubmitForm';

const App = () => {
    const { listId } = useParams();
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-6">
                    <div className='todolist'>
                        <SubmitForm />
                        { listId ? <TodoList listId={listId} /> : <Lists />}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App;