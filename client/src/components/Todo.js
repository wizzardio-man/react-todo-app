import React from 'react';

// use onDelete and onDone from redux instead of tree components
// create separate component for svg
const Todo = (props) => {
    return (
      <li className='ui-state-default'>
        <div className='checkbox'>
          <label className='form-check-label'>
              <label>
              { !props.content.isDone && (
                <input type="checkbox" value="" onClick={() => {props.onDone(props.id)}} />
              )}
               <p className={(props.content.isDone && 'completed')}>{props.content.title}</p>
              </label>
            <button 
              className='remove-item btn btn-default btn-xs right'
              onClick={() => {props.onDelete(props.id)}}>
                <span className='glyphicon glyphicon-remove'></span>
            </button>
          </label>
        </div>
      </li>
    );
}

export default Todo;