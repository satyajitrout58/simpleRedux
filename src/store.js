import { createStore } from 'redux';
import testReducer from './reducer/testReducer';

const store = createStore(testReducer)

export default store;
