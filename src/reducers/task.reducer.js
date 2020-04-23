import { actionTypes } from "../actions/action.types";

export const taskReducer = (state = [], action) => {
    switch(action.type) {
        case actionTypes.ADD_TASK:
            return [
                ...state,
                action.task
            ];
        case actionTypes.DELETE_TASK:
            return state.filter(task => task.name !== action.task.name);
        default:
            return state;
    }
}