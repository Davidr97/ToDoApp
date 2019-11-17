import {combineReducers} from 'redux';
import postsReducer from './postsReducer';
import readPostsReducer from './readPostsReducer';
import usersReducer from './usersReducer';

const usersApp = combineReducers({
    users: usersReducer,
    posts: postsReducer,
    readPosts: readPostsReducer
});

export default usersApp;
