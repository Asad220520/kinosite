import { createStore } from "redux";
import { Reducer } from "./reduxer";

export const store = createStore(Reducer)