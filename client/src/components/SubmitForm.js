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
    <form>
      <input 
        type='text'
        name='term'
        className='input'
        placeholder='Enter Item'
        value={term}
        onChange={(e) => {setTerm(e.target.value)}}
      />
      <button className='button' onClick={handleSubmit}>Submit</button>
    </form>
  );
}