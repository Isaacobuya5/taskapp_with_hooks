import React from "react";

import Button from "./Button";
import { markTaskComplete, deleteTask } from "../actions/task.actions";


const Task = ({ task, number }) => (
  <tr>
    <td>{number}</td>
    <td>{task.name}</td>
    <td>{task.description}</td>
    <td>{task.completed.toString()}</td>
    <td className="actions-button">
      <Button value="Edit" task={task} action={markTaskComplete}/>
    </td>
    <td className="actions-button">
      <Button value="Delete" task={task} action={deleteTask}/>
    </td>
  </tr>
);

export default Task;
