import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { authReducer } from "./auth/reducer";
import {photoReducer} from "./photo/reducer";
import thunk from "redux-thunk";


const rootReducer=combineReducers({
    auth:authReducer,
    photos:photoReducer

})

export const store=legacy_createStore(rootReducer,applyMiddleware(thunk))