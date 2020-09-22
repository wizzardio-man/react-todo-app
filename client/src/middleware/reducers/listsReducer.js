import * as actions from '../actions/listsActions';

export const initialState = {
  loading: false,
  hasErrors: false,
  lists: [],
}

export default function listsReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_LISTS:
      return { ...state, loading: true };
    case actions.GET_LISTS_SUCCESS:
      return { lists: action.payload, loading: false, hasErrors: false };
    case actions.GET_LISTS_FAILURE:
      return { ...state, loading: false, hasErrors: true };
    default:
      return state;
  }
}