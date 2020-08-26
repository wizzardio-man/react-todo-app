import React from "react";

const Done = (props) => {
    return (
      <div className='card-header'>
        <h1 className='card-header-title header'>
          Done {props.numTodos} items
        </h1>
      </div>
    );
}

export default Done;