import React from "react";

import Todo from './Todo';

const TodoList = (props) => {
    const todos = props.items.map((todo, index) => {
      return <Todo 
          content={todo} 
          key={index} 
          id={todo._id} 
          onDelete={props.onDelete} 
          onDone={props.onDone} 
        />
    });

    return( 
      <ul className='list-unstyled' id='sortable'>
        {todos}
      </ul>
    );
}

export default TodoList;