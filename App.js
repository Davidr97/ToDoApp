/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import rootReducer from './redux3/reducers';
import { Provider } from 'react-redux';
import CountriesList from './components/container/countries';
import {storeCreator} from './redux3/store';


const App: () => React$Node = () => {
  return (
        <Provider store={storeCreator(rootReducer)}>
            <CountriesList/>
        </Provider>
      /*
      *  5 inputs
      *     firstName
      *     lastname
      *     avatar
      *     email
      *     password
      *     firebase.auth().createUserWithEmailAndPassword(email, password)
      *         .then((userCredential) => {
      *             firebase.firestore().collection('users')
      *                 .doc(userCredential.uid)
      *                 .set({
      *                     firstName: firstName,
      *                     lastName: lastName,
      *                 .....
      * }).then(this.props.navigation.navigate("CHAT_SCREEN")
      *         })
      *         .catch(error => alert())
      * */
      /*
            email
            password

            firebase.auth().signInWithEmailAndPassword(email, password)
                .then((userCredential) => {
                    firebase.firestore().collection('users').doc(userCredential.uid)
                        .get()
                        .then((snapshot) => {
                            const data = snapshot.data()
                        })
                })
                .catch(error => alert())

       */
  )
};


export default App;
