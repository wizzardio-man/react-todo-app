import React from 'react';

const Todo = (props) => {
    return(
      <div className='list-item'>
        {props.content.title}
        {
          props.content.isDone === false ? (
            <button className="done is-pulled-right" 
              onClick={() => {props.onDone(props.id)}} />
          ) : (
          <div/>
        )}
        <button className="delete is-pulled-right" 
          onClick={() => {props.onDelete(props.id)}} />
      </div>
    );
}

export default Todo;