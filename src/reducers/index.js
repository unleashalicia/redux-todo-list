import {combineReducers} from 'redux';
import todoReducer from './todo_reducer';

export default combineReducers({
    todo: todoReducer
});