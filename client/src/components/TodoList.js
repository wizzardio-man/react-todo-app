import React, { useEffect } from "react";
import { connect } from 'react-redux';

import { fetchItems } from '../middleware/actions/itemsActions';
import Header from './Header';

import Todo from './Todo';

const TodoList = ({ dispatch, loading, items, hasErrors }) => {
    useEffect(() => {
      dispatch(fetchItems())
    }, [dispatch]);

    const renderItems = () => {
      if (loading) return <p>Loading items...</p>
      if (hasErrors) return <p>Unable to display items...</p>
      if (items) {
        const todos = items.map((todo, index) => {
          return <Todo 
              content={todo}
              key={index}
              id={todo._id}
            />
        });

        return (
          <div>
            <Header msg={`You have: ${items.length} ${items.length === 1 ? 'item' : 'items'}`} />
            <ul className='list-unstyled' id='sortable'>
              {todos}
            </ul>
          </div>
        )
      }
    }

    return (
      <div>
        {renderItems()}
      </div>
    );
}

const mapStateToProps = state => ({
  loading: state.items.loading,
  items: state.items.items.data,
  hasErrors: state.items.hasErrors,
});

export default connect(mapStateToProps)(TodoList);