import React, { useState } from 'react';
import { connect } from 'react-redux';

import { addItem } from '../middleware/actions/itemsActions';

const SubmitForm = (props) => {
  const [ term, setTerm ] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if(term === '') return;
    props.addItem(term);
    setTerm('');
  }

  return (
    <div>
        <input 
          type='text'
          className='form-control add-todo'
          placeholder='Add new item' 
          value={term}
          onChange={(e) => {setTerm(e.target.value)}}
        />
        <button className='btn btn-success' id='checkAll' onClick={handleSubmit}>Add</button>
    </div>
  );
}

const mapDispatchToProps = {
  addItem
};

export default connect(null, mapDispatchToProps)(SubmitForm);