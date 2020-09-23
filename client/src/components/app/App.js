import React from 'react';
import { useParams } from 'react-router-dom';

import Lists from '../lists/Lists';
import Items from '../items/Items';

import Submit from '../common/actions/Submit';

const App = () => {
    const { listId } = useParams();
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-6">
                    <div className='todolist'>
                        <Submit />
                        { listId ? <Items listId={listId} /> : <Lists />}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App;