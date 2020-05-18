import {createStore, combineReducers} from 'redux';
import userReducer from './reducers/user';
import postsReducer from './reducers/post';

const reduces = combineReducers({
  user: userReducer,
  posts: postsReducer,
});

export default storeConfig = () => {
  return createStore(reduces);
};
