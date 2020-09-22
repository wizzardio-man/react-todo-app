import React from 'react';

import Lists from '../lists/Lists';

const App = () => {
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-6">
                    <div className='todolist'>
                        <Lists />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App;