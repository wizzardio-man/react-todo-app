import React from 'react';

import TodoList from './TodoList';
import SubmitForm from './SubmitForm';

const App = () => {
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-6">
                    <div className='todolist'>
                        <SubmitForm />
                        <TodoList />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App;