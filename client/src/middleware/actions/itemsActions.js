import axios from 'axios';

export const GET_ITEMS = 'GET_ITEMS';
export const GET_ITEMS_SUCCESS = 'GET_ITEMS_SUCCESS';
export const GET_ITEMS_FAILURE = 'GET_ITEMS_FAILURE';
export const DELET_ITEM = 'DELETE_ITEM';

export const getItems = () => ({ type: GET_ITEMS });

export const getItemsSuccess = items => ({
  type: GET_ITEMS_SUCCESS,
  payload: items,
});

export const getItemsFailure = () => ({ type: GET_ITEMS_FAILURE });

/**
 * Move axios calls to another file/functions...
 */

export function fetchItems() {
    return function action(dispatch) {
        dispatch(getItems());
        axios.get('http://localhost:5000/server/todoitem')
            .then(
                response => dispatch(getItemsSuccess(response)),
                err => dispatch(getItemsFailure())
            );
    }
}

export function deleteItem(id) {
    return function action(dispatch) {
        axios.delete(`http://localhost:5000/server/todoitem/${id}`)
            .then(() => {
                fetchItems()(dispatch);
            });
    }
}

export function doneItem(id) {
    return function action(dispatch) {
        axios.put(`http://localhost:5000/server/todoitem/${id}`, { isDone: true })
            .then(() => {
                fetchItems()(dispatch);
            });
    }
}

export function addItem(task) {
    return function action(dispatch) {
        axios.post('http://localhost:5000/server/todoitem',
            { title: task, isDone: false, isDeleted: false })
                .then(() => {
                    fetchItems()(dispatch);
                });
    }
}