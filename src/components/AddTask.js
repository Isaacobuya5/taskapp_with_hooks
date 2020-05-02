import React, { useState, useContext, useEffect } from "react";

import { useResource } from "react-request-hook";

import { addTask } from "../actions/task.actions";
import { StateContext } from "../contexts/contexts";

const AddTask = () => {
  const [task, setTask] = useState({
    taskName: "",
    taskDescription: "",
  });

    // completed state of task
    const [isComplete, setIsComplete] = useState(false);

  const { taskName, taskDescription } = task;
  // hook for adding a task
  const [anotherTask, saveTask] = useResource((taskName, taskDescription, isComplete) => ({
       url: "/tasks",
       method: "post",
       data: {
         name: taskName,
         description: taskDescription,
         completed: isComplete
       }
  }))

  console.log(anotherTask);
  const { dispatch } = useContext(StateContext);


  useEffect(() => {
    if (anotherTask && anotherTask.error) {
      console.log("unable to create a new task")
      return;
    }
    if (anotherTask && anotherTask.data) {
      // dispatch new task to state
      dispatch(addTask(anotherTask.data));
    }
  },[anotherTask]);

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setTask({
      ...task,
      [name]: value,
    });
  };

  // change status of task
  const handleCheckBox = (event) => {
      event.preventDefault();
    //   const {name, checked} = event.target;
      setIsComplete(previousValue => !previousValue);
  }

  const handleSubmit = (event) => {
    const newTask = {
        name: taskName,
        description: taskDescription,
        completed: isComplete
    };

    // post to server
    const { name, description, completed } = newTask;

    saveTask(name, description, completed);
    // clear input fields after submitting task
    setTask({
        ...task,
        taskName: '',
        taskDescription: '',
    });

    // set back completed to false
    setIsComplete(false);
  };


  return (
    <article id="add-task-form">
      <h3>add a new task here</h3>
      <div className="divider"></div>
      <form>
        <input
          type="text"
          name="taskName"
          id="taskName"
          value={taskName}
          onChange={handleChange}
          placeholder="enter task here"
        />
        <textarea
          name="taskDescription"
          id="taskDescription"
          value={taskDescription}
          onChange={handleChange}
          placeholder="brief description of the task..."
        />
        <span className="input-checkbox">
          {" "}
          Completed? <input type="checkbox" name="complete" checked={isComplete} onChange={handleCheckBox}/>
        </span>
      </form>
      <span className="btn">
        <button type="submit" onClick={handleSubmit}>
          save task
        </button>
      </span>
    </article>
  );
};

export default AddTask;
