import React, { useState, useEffect } from "react";

import { addTask } from "../actions/task.actions";

const AddTask = ({ dispatch }) => {
  const [task, setTask] = useState({
    taskName: "",
    taskDescription: "",
  });

  // completed state of task
  const [isComplete, setIsComplete] = useState(false);

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

    // setTasks([
    //     ...tasks,
    //     newTask
    // ]);
    dispatch(addTask(newTask));
    // clear input fields after submitting task
    setTask({
        ...task,
        taskName: '',
        taskDescription: ''
    });

    // set back completed to false
    setIsComplete(!isComplete);
  };

  const { taskName, taskDescription } = task;

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
