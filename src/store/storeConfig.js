import {createStore, combineReducers} from 'redux';
import userReducer from './reducers/user';

const reduces = combineReducers({
  user: userReducer,
});

export default storeConfig = () => {
  return createStore(reduces);
};
