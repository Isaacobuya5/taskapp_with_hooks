import React, {useContext } from 'react';

import Task from "./Task";
import { StateContext } from "../contexts/contexts";
const ListTasks = () => {
    const { state } = useContext(StateContext); 
    const { tasks } = state;
return (
    <section id="display-tasks">
    {tasks.length > 0 ? 
    (<table>
         <thead>
             <tr>
                 <th scope="col">No. </th>
                 <th scope="col">Task Name</th>
                 <th scope="col">Description</th>
                 <th scope="col">Completed</th>
                 <th scope="col">Edit</th>
                 <th scope="col">Delete</th>
                 </tr>
         </thead>
         <tbody>
             {tasks.map((task, index) => (
                 <Task key={index} task={task} number={index + 1} />
             ))}
         </tbody>
     </table>
    ) : "No task available.Please add a new task"};
    </section>
);
             }
export default ListTasks;