import { createStore,combineReducers } from "redux";
import { reducerBody } from "./reducerBody";
import { customerReducer } from "./reducerTwo";
import {composeWithDevTools} from 'redux-devtools-extension'


const rootReducer= combineReducers({
   reducerBody: reducerBody,
   reducerTwo: customerReducer
})

export const store = createStore(rootReducer,composeWithDevTools())