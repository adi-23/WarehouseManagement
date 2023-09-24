import {legacy_createStore as createStore} from "redux";
import rootReducer from "./reducers/RootReducer";

const store = new createStore(rootReducer)

export default store;