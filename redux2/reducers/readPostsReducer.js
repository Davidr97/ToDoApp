import {addObjectToArray} from '../utilities/addObjectToArray';
import {createReducer} from '../utilities/createReducer';
import {actionConstants} from '../actions/constants';

const readPostHandler = (state, action) => {
    const {readPostId, userId, postId} = action;
    return addObjectToArray({
        readPostId,
        userId,
        postId
    },state)
};

const readPostsReducer = createReducer([],{
    [actionConstants.READ_POST]:readPostHandler
});

export default readPostsReducer
