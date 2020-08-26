import React from "react";

import Todo from './Todo';

const TodoList = (props) => {
    const todos = props.items.map((todo, index) => {
      return <Todo content={todo} key={index} id={todo.id} onDelete={props.onDelete} onDone={props.onDone} />
    });

    return( 
      <div className='list-wrapper'>
        {todos}
      </div>
    );
}

export default TodoList;