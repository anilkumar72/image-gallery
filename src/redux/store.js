import { createStore,applyMiddleware,combineReducers } from 'redux';
import thunk from 'redux-thunk'
import {fetchDataReducer} from "./fetchDataReducer";
import {composeWithDevTools } from 'redux-devtools-extension'
import {authReducer} from './authReducer'

const rootReducer=combineReducers({fetchData:fetchDataReducer,fetchAuth:authReducer})
 const store=createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)));


export default store;