import { actionTypes } from "../actions/action.types";

export const userReducer = (state , action) => {
    switch(action.type) {
        case actionTypes.LOGIN_USER:
            return {
                ...state,
                user: action.user
            }
        case actionTypes.LOGOUT_USER:
            return '';
        case actionTypes.REGISTER_USER:
            return {
                ...state,
                user: action.user
            }
        default:
            return state;
    }
}