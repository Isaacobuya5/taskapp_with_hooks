import { actionTypes } from "../actions/action.types";

export const taskReducer = (state = [], action) => {
    console.log(state);
    switch(action.type) {
        case actionTypes.ADD_TASK:
            return [
                ...state,
                action.task
            ];
        case actionTypes.FETCH_TASKS:
            return action.tasks;
        case actionTypes.DELETE_TASK:
            return state.filter(task => task.name !== action.task.name);
        case actionTypes.MARK_TASK_COMPLETE:
            return state.map(task => {
                if (task.name === action.task.name) {
                    task = {...task, completed: !action.task.completed}
                }
                return task;
            })
        default:
            return state;
    }
}