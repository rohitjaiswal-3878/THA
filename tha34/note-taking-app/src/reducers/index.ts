import { combineReducers } from "redux";
import NoteReducer from "./notesReducer";
const rootReducer = combineReducers({
    notes:NoteReducer,
})
export type noteType = ReturnType<typeof rootReducer>;
export default rootReducer;