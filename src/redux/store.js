import { createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import {fetchDataReducer} from "./fetchDataReducer";
import {composeWithDevTools } from 'redux-devtools-extension'


 const store=createStore(fetchDataReducer,composeWithDevTools(applyMiddleware(thunk)));
export default store;