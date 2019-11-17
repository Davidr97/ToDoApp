import {addObjectToArray} from '../utilities/addObjectToArray';
import {updateObjectInArray} from '../utilities/updateObjectInArray';
import {createReducer} from '../utilities/createReducer';
import {actionConstants} from '../actions/constants';


const addPostHandler = (state, action) => {
    const {postId, title, text, userId} = action;
    return addObjectToArray({
        postId,
        title,
        text,
        userId
    }, state)
};

const editPostHandler = (state, action) => {
    const {postId, text} = action;
    return updateObjectInArray({
        postId,
        text
    }, 'postId', state)
};

const postsReducer = createReducer([],{
    [actionConstants.ADD_POST]:addPostHandler,
    [actionConstants.EDIT_POST]:editPostHandler
});

export default postsReducer;

