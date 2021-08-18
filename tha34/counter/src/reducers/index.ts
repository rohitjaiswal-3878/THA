import { combineReducers } from "redux";
import CounterReducer from "./counterReducer";

const rootReducer = combineReducers({
    counter:CounterReducer,
})
export type reducerType = ReturnType<typeof rootReducer>;
export default rootReducer;