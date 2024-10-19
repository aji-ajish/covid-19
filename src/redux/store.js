import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {thunk} from "redux-thunk"
import casesReducer from './slice/casesSlice'

const reducer=combineReducers({
    covidState:casesReducer
})

const store=configureStore({
    devTools:true,
    reducer,
    middleware:()=>[thunk]
})

export {store}