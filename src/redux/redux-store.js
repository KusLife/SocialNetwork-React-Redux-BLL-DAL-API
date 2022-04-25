import { combineReducers, createStore } from 'redux';
import postEvReducer from './post-ev-reducer';
import messageReducer from './messege-reducer';
import usersReducer from './users-reducer';
import authUserReducer from './auth-reducer';

const reducers = combineReducers({
  eventsData: postEvReducer,
  msgsData: messageReducer,
  usersData: usersReducer,
  auth: authUserReducer,
});

const store = createStore(reducers);



export default store;
