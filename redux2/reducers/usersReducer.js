import {addObjectToArray} from '../utilities/addObjectToArray';
import {createReducer} from '../utilities/createReducer';
import {actionConstants} from '../actions/constants';

const addUserHandler = (state, action) => {
    const {userId,firstName,secondName,username, image} = action;
    return addObjectToArray({
        userId,
        firstName,
        secondName,
        username,
        image
    }, state)
};

const usersReducer = createReducer([], {
    [actionConstants.ADD_USER]:addUserHandler
});

export default usersReducer;
