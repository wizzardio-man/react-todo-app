import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import { addItem } from '../../../middleware/actions/itemsActions';
import { addList } from '../../../middleware/actions/listsActions';

const Submit = ({ addItem, addList }) => {
    const [ term, setTerm ] = useState('');
    const { listId } = useParams();

    const submitNewTerm = ( e ) => {
        e.preventDefault();
        if (term === '') return;
        if (listId) {
            addItem(term, listId);
        } else {
            addList(term);
        }
        setTerm('');
    }

    return (
        <div>
            <input 
                type='text'
                className='form-control add-todo'
                value={ term }
                onChange={( e ) => { setTerm(e.target.value) }}
            />
            <button 
                className='btn btn-success'
                id='checkAll'
                onClick={ submitNewTerm }
            >Add</button>
        </div>
    )
}

const mapDispatchToProps = {
    addItem,
    addList
};

export default connect(null, mapDispatchToProps)(Submit);