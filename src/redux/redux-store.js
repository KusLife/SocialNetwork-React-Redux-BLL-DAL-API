import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import postEvReducer from './post-ev-reducer';
import messageReducer from './messege-reducer';
import usersReducer from './users-reducer';
import authUserReducer from './auth-reducer';
import thunkMiddleware from 'redux-thunk';
import appReducer from './app-reducer';

const reducers = combineReducers({
  eventsData: postEvReducer,
  msgsData: messageReducer,
  usersData: usersReducer,
  auth: authUserReducer,
  app: appReducer,
});



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(
    applyMiddleware(thunkMiddleware)
  ));


window.__store__ = store


export default store;
