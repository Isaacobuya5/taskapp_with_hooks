import { userReducer } from './user.reducer';
import { taskReducer } from "./task.reducer";

export const rootReducer = (state, action) => {
return {
    user: userReducer(state.user, action),
    tasks: taskReducer(state.tasks, action)
}
}