import { createStore } from "redux";
import wordReducer, { initialState }from "./word.reducer";



const store = createStore(wordReducer, initialState);

export default store;