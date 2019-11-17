/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import StudentsList from './components/container/ViewStudentList';
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import { Text } from 'react-native';
import usersApp from './redux2/reducers';
import {addUser, addPost, editPost, readPost} from './redux2/actions';
import md5 from "md5";

const store = createStore(usersApp);
console.log(store.getState());

const unsubscribe = store.subscribe(() => console.log(store.getState()));
store.dispatch(addUser('David','Ristov','david@example.com','davidjpg'));
store.dispatch(addPost('post 1','text 1',md5('david@example.com')));
store.dispatch(editPost(md5('post 1',), 'text 2'));
store.dispatch(readPost(md5('david@example.com'), md5('post 1')));
unsubscribe();

const App: () => React$Node = () => {
  return (
      <Text>
          asd
      </Text>
  )
};


export default App;
