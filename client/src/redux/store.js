import converterReducer from './converter/converterReducer';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const store = createStore(converterReducer, applyMiddleware(thunk, logger));

export default store;