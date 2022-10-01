import { createStore } from "redux";
import { reduser, initialState } from "../ducks/briefcase";

export default createStore(reduser, initialState );