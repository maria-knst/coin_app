import { createStore } from "redux";
import { reduser, initialState } from "../ducks/briefcase";

function saveToLocalStorage(state) {
    try {
        const serialisedState = JSON.stringify(state);
        localStorage.setItem("persistantState", serialisedState);
    } catch (e) {
        console.warn(e);
    }
}

function loadFromLocalStorage() {
    try {
        const serialisedState = localStorage.getItem("persistantState");
        if (serialisedState === null) return initialState;
        return JSON.parse(serialisedState);
    } catch (e) {
        console.warn(e);
        return undefined;
    }
}

const store =  createStore(reduser, loadFromLocalStorage());


store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;