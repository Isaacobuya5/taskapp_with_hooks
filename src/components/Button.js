import React, { useContext, useEffect, useState } from "react";
import { useResource } from "react-request-hook";
import { StateContext } from "../contexts/contexts";


const Button = ({value, task, action}) => {

const [currentTask, setCurrentTask] = useState(task);

const { dispatch } = useContext(StateContext);

// hook to delete a task
const [, deleteTask] = useResource(() => ({
    url: `/tasks/${task.id}`,
    method: "delete"
}));

// hook to edit task in db
const [edit , editTask] = useResource((edittedTask) => ({
    url: `/tasks/${task.id}`,
    method: "patch",
    data: {completed: edittedTask.completed}
}));

useEffect(() => {
    if (edit && edit.error) {
        console.log("could not edit");
        return;
    }

    if (edit && edit.data) {
        dispatch(action(currentTask));
    }
},[currentTask]);

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
            // set the completed state of current task
            setCurrentTask({
                ...currentTask,
                completed: !currentTask.completed
            });
            // edit in db
            editTask(currentTask);
            console.log(edit.data);
        }}>{value}</button>)
    )
}

export default Button;