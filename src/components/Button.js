import React, { useContext } from "react";
import { useResource } from "react-request-hook";
import { StateContext } from "../contexts/contexts";


const Button = ({value, task, action}) => {

const { dispatch } = useContext(StateContext);

// hook to delete a task
const [, deleteTask] = useResource(() => ({
    url: `/tasks/${task.id}`,
    method: "delete"
}));

// hook to edit task in db
const [, editTask] = useResource((edittedTask) => ({
    url: `/tasks/${task.id}`,
    method: "put",
    data: edittedTask
}));

return (
    value && value === 'Delete' ? (
        <button 
        type="submit"
        style={{ margin: 0, display: "inline-block"}}
        onClick={() => {
            // delete from db
            deleteTask();
            dispatch(action(task));
        }}>{value}</button>):(
        <button 
        type="submit"
        style={{ margin: 0, display: "inline-block"}}
        onClick={() => {
            // edit in db
            editTask(task);
            dispatch(action(task));
        }}>{value}</button>)
    )
}

export default Button;