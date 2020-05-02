import { actionTypes } from "../actions/action.types";

export const addTask = (task) => {
    return {
        type: actionTypes.ADD_TASK,
        task
    }
}

export const deleteTask = (task) => {
    return {
        type: actionTypes.DELETE_TASK,
        task
    }
}

export const markTaskComplete = (task) => {
    return {
        type: actionTypes.MARK_TASK_COMPLETE,
        task
    }
}

export const fetchTasks = (tasks) => {
    return {
        type: actionTypes.FETCH_TASKS,
        tasks
    }
}