import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import ApiUserReducer from "./reducers/ApiUserReducer";
import UserReducer from "./reducers/UserReducer";

const rootReducer = combineReducers({
    users: UserReducer,
    apiUsers: ApiUserReducer 
})

const store = createStore( rootReducer, applyMiddleware(thunk));

export default store;