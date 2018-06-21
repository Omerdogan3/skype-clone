import { createStore } from "redux";
import reducer from "../reducers";
import { contacts } from "../static-data";

const store = createStore(reducer, {contacts}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); 

export default store;