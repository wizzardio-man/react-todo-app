import React from 'react';
import { Link } from 'react-router-dom';

const IterableObject = (props) => {
    return (
        <li className='ui-state-default'>
            <div className='checkbox'>
                <label className='form-check-label'>
                    <label>
                        <Link to={`/list/${props.id}`}>
                            <p>{props.content.title}</p>
                        </Link>
                    </label>
                </label>
            </div>
        </li>
    )
};

export default IterableObject;
