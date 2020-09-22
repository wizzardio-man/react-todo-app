import Lists from '../server/lists';

const lists = new Lists();

export const GET_LISTS = 'GET_LISTS';
export const GET_LISTS_SUCCESS = 'GET_LISTS_SUCCESS';
export const GET_LISTS_FAILURE = 'GET_LISTS_FAILURE';
export const DELETE_LIST = 'DELETE_LIST';

export const getLists = () => ({ type: GET_LISTS });
export const getListsSuccess = lists => ({
    type: GET_LISTS_SUCCESS,
    payload: lists
});
export const getListsFailure = () => ({
    type: GET_LISTS_FAILURE
});

export function fetchLists() {
    return function action(dispatch) {
        dispatch(getLists());
        lists.fetchObjects()
            .then(
                response => dispatch(getListsSuccess(response)),
                err => dispatch(getListsFailure)
            );
    }
}

export function deleteLIst(id) {
    return function action(dispatch) {
        lists.deleteObject(id)
            .then(() => {
                fetchLists()(dispatch);
            });
    }
}

export function addList(list) {
    return function action(dispatch) {
        lists.addNewServerList(list)
            .then(() => {
                fetchLists()(dispatch);
            });
    }
}