import Items from '../server/items';

const items = new Items();

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

export function fetchItems(listId) {
    console.log(`Here i am ${listId}`)
    return function action(dispatch) {
        dispatch(getItems());
        items.fetchObjects(listId)
            .then(
                response => dispatch(getItemsSuccess(response)),
                err => dispatch(getItemsFailure())
            );
    }
}

export function deleteItem(id) {
    return function action(dispatch) {
        items.deleteObject(id)
            .then(() => {
                fetchItems()(dispatch);
            });
    }
}

export function doneItem(id) {
    return function action(dispatch) {
        items.doneServerItem(id)
            .then(() => {
                fetchItems()(dispatch);
            });
    }
}

export function addItem(task, listId) {
    return function action(dispatch) {
        items.addNewServerItem(task, listId)
            .then(() => {
                fetchItems(listId)(dispatch);
            });
    }
}