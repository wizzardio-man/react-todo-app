import { combineReducers } from 'redux';

import itemsReducer from './itemsReducer';
import listsReducer from './listsReducer';

const rootReducer = combineReducers({
    items: itemsReducer,
    lists: listsReducer
});

export default rootReducer;