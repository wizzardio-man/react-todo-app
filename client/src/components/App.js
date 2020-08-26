import React from "react";

import TodoList from './TodoList';
import Header from './Header';
import Done from './Done';
import SubmitForm from './SubmitForm';

class App extends React.Component {
    state = {
      items: [ 
        {title: 'Read about design patterns', isActive: 1, isClosed: 0, id: 0},
        {title: 'Apply logger into React.JS App, server part', isActive: 1, isClosed: 0, id: 1}
      ]
    }

    submitNewItem = task => {
      this.setState({
        items: [...this.state.items, { title: task, isActive: 1, isClosed: 0, id: this.state.items.length }]
      });
    }

    deleteItem = id => {
      const copyItems = this.state.items;
      const index = copyItems.findIndex(i => i.id === id);
      const item = copyItems[index];
      item.isClosed = 1;
      copyItems[index] = item;
      this.setState({ items: copyItems });
    }

    handleDone = id => {
      const copyItems = this.state.items;
      const index = copyItems.findIndex(i => i.id === id);
      const item = copyItems[index];
      item.isActive = 0;
      copyItems[index] = item;
      this.setState({ items: copyItems });
    }
  
    render() {
      const newItems = this.state.items.filter(i => i.isActive === 1 && i.isClosed !== 1);
      const doneItems = this.state.items.filter(i => i.isActive === 0 && i.isClosed !== 1);
      return(
        <div className='wrapper'>
          <div className='card frame'>
            { newItems.length > 0 ? (
                <div>
                  <Header numTodos={newItems.length} />
                  <TodoList items={newItems} onDelete={this.deleteItem} onDone={this.handleDone} />
                </div>
              ) : (
                <div />
            )}
            { doneItems.length > 0 ? (
              <div className="done-list-border-top">
                <Done numTodos={doneItems.length} />
                <TodoList items={doneItems} onDelete={this.deleteItem} />
              </div>
            ) : (
              <div />
            )}
            <SubmitForm onFormSubmit={this.submitNewItem} />
          </div>
        </div>
      );
    } 
  }

export default App;