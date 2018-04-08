import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import blogsReducer from './blogsReducer';

export default combineReducers({
    blogs: blogsReducer
});