import * as actions from '../actions/itemsActions';

export const initialState = {
  loading: false,
  hasErrors: false,
  items: [],
}

export default function itemsReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_ITEMS:
      return { ...state, loading: true };
    case actions.GET_ITEMS_SUCCESS:
      return { items: action.payload, loading: false, hasErrors: false };
    case actions.GET_ITEMS_FAILURE:
      return { ...state, loading: false, hasErrors: true };
    default:
      return state;
  }
}