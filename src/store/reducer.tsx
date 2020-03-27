import { combineReducers } from 'redux';
import list from './list';
var reducers = combineReducers({
    list:list
});

export default reducers;