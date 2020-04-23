import { actionTypes } from "../actions/action.types";

// login a user
export const loginUser = (user) => {
    return {
        type: actionTypes.LOGIN_USER,
        user
    }
}

// register a new user
export const registerUser = (user) => {
    return {
        type: actionTypes.REGISTER_USER,
        user
    }
}

// logout a user
export const logoutUser = () => {
    return {
        type: actionTypes.LOGOUT_USER,
    }
}
