import React from 'react';

import Button from "./Button";

const Task = ({task, number}) => (
    <tr>
        <td>{number}</td>
    <td>{task.name}</td>
<td>{task.description}</td>
<td>{task.completed.toString()}</td>
<td className="actions-button"><Button value="Edit" /></td>
<td className="actions-button"><Button value="Delete" /></td>
    </tr>
);

export default Task;