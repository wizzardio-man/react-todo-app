import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import Delete from './actions/Delete';
import Done from './actions/Done';

const IterableObject = (props) => {
    const { listId } = useParams();

    const renderObjectBody = () => {
        if (listId) {
            return (
                <div>
                    { !props.content.isDone && (
                        <Done id={props.id}/>
                    )}
                    <p className={(props.content.isDone && 'completed')}>{props.content.title}</p>
                </div>
            )

        } else {
            return (
               <Link to={`/list/${props.id}`}>
                    <p>{props.content.title}</p>
                </Link>
            )
        }
    }


    return (
        <li className='ui-state-default'>
            <div className='checkbox'>
                <label className='form-check-label'>
                    <label>
                        <label>
                            { renderObjectBody() }
                        </label>
                        <Delete id={props.id} />
                    </label>
                </label>
            </div>
        </li>
    )
};

export default IterableObject;
