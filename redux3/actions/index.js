import { createActions } from 'redux-actions';
import {actions} from './constants';

export const {requestCountries, receiveCountries} = createActions({
   [actions.REQUEST_COUNTRIES] : country => country,
   [actions.RECEIVE_COUNTRIES] : country => country
});

export function fetchCountries(){
    return function(dispatch){
        dispatch(requestCountries());
        fetch('https://restcountries.eu/rest/v2/all')
            .then(response => response.json())
            .then(countries => dispatch(receiveCountries({countries})))
            .catch(error => console.log(error));
    }
}
