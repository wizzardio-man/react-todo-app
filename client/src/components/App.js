import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchItems,
    deleteItem,
    doneItem,
    addItem } from '../middleware/actions/itemsActions';

import TodoList from './TodoList';
import Header from './Header';
import SubmitForm from './SubmitForm';

// TODO:
// modify dispatch to mapDispatchToProps
const App = ({ dispatch, loading, items, hasErrors }) => {
    useEffect(() => {
        dispatch(fetchItems())
    }, [dispatch])

    const renderItems = () => {
        if (loading) return <p>Loading items...</p>
        if (hasErrors) return <p>Unable to display items...</p>
        if (items) return (
            <div>
                <Header msg={`You have: ${items.length} ${items.length === 1 ? 'item' : 'items'}`} />
                <TodoList items={items} {...actionHandlers} />
            </div>
        )
    }

    const actionHandlers = {
        onDelete: (id) => {
            dispatch(deleteItem(id))
        },
        onDone: (id) => {
            dispatch(doneItem(id))
        }
    };

    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-6">
                    <div className='todolist'>
                        <SubmitForm onFormSubmit={(item) => {dispatch(addItem(item))}} />
                        {renderItems()}
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    loading: state.items.loading,
    items: state.items.items.data,
    hasErrors: state.items.hasErrors,
});

export default connect(mapStateToProps)(App);