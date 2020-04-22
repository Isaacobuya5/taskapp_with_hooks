import React from 'react';

import Task from "./Task";

const ListTasks = ({ tasks }) => (
    <section id="display-tasks">
     <table>
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
                 <Task key={index} task={task} number={index + 1}/>
             ))}
         </tbody>
     </table>
    </section>
);

export default ListTasks;