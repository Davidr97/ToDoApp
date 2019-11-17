import md5 from "md5";
import {actionConstants} from './constants';


const addUser = (firstName, secondName, username, image) => ({
    type: actionConstants.ADD_USER,
    userId: md5(username),
    firstName,
    secondName,
    username,
    image
});

const addPost = (title, text, userId) => ({
   type: actionConstants.ADD_POST,
   postId: md5(title),
   title,
   text,
   userId
});

const editPost = (postId, text) => ({
   type: actionConstants.EDIT_POST,
   postId,
   text
});

const readPost = (userId, postId) => ({
   type: actionConstants.READ_POST,
   readPostId: md5(userId + postId),
   userId,
   postId
});

export {addUser, addPost, editPost, readPost};
