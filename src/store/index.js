// these packages are not installed in this project, but are required
import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';

import app from './app';
import auth from './auth';

const reducer = combineReducers({
	auth,
	app,
});

const store = configureStore({
	reducer,
	// you might not have to worry about middleware, thunk is already provided by default for redux toolkit configureStore
	// https://redux-toolkit.js.org/api/getDefaultMiddleware
});

export default store;
