import React, { useState } from 'react';

export default function SubmitForm(props) {
  const [ term, setTerm ] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if(term === '') return;
    props.onFormSubmit(term);
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