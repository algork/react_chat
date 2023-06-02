import { createStore } from "redux";
import { profileReducer } from "./Profile/reducer";

export const store = createStore(profileReducer);
