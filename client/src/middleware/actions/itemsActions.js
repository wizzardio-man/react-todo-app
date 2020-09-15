import { 
    getServerItems, 
    deleteServerItem,
    doneServerItem,
    addServerItem
} from '../server/server';

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

export function fetchItems() {
    return function action(dispatch) {
        dispatch(getItems());
        getServerItems()
            .then(
                response => dispatch(getItemsSuccess(response)),
                err => dispatch(getItemsFailure())
            );
    }
}

export function deleteItem(id) {
    return function action(dispatch) {
        deleteServerItem(id)
            .then(() => {
                fetchItems()(dispatch);
            });
    }
}

export function doneItem(id) {
    return function action(dispatch) {
        doneServerItem(id)
            .then(() => {
                fetchItems()(dispatch);
            });
    }
}

export function addItem(task) {
    return function action(dispatch) {
        addServerItem(task)
            .then(() => {
                fetchItems()(dispatch);
            });
    }
}