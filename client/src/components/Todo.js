import React from 'react';

const Todo = (props) => {
    return(
      <div className={"list-item " + (props.content.isDone && 'list-item-crossed')}>
        { props.content.title }
        { !props.content.isDone && (
          <button
            className="done is-pulled-right"
            onClick={() => {props.onDone(props.id)}} 
          />
        )}
        <button 
          className="delete is-pulled-right" 
          onClick={() => {props.onDelete(props.id)}}
        />
      </div>
    );
}

export default Todo;