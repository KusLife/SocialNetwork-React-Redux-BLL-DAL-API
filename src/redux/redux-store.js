import { combineReducers, createStore } from "redux"
import postEvReducer from "./post-ev-reducer"
import messageReducer from "./messege-reducer"


const reducers = combineReducers({
  eventsData: postEvReducer,
  msgsData: messageReducer
})

const store = createStore(reducers)

export default store
