import {persist_store} from "./persist_store.js";

export const isLoggedIn = persist_store("isLoggedIn", false)
export const userSession = persist_store("user", {})

export const loginUser = () => {
    isLoggedIn.set(true)
}

export const logoutUser = () => {
    isLoggedIn.set(false)
}
