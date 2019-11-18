import { handleActions } from 'redux-actions';
import {actions} from '../actions/constants';

const requestCountriesHandler = () => {
    return ({
        isFetching: true,
        items: []
    })
};

const receiveCountriesHandler = (state, action) => {
    const {countries} = action.payload;
    return ({
        isFetching: false,
        items: countries
    })
};

const initialState = {
    isFetching: false,
    items: []
};

export const countriesReducer = handleActions({
    [actions.REQUEST_COUNTRIES] : requestCountriesHandler,
    [actions.RECEIVE_COUNTRIES] : receiveCountriesHandler
}, initialState);

