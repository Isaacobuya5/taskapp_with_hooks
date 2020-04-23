import React, {useState, useReducer} from 'react';

import Header from "./components/Header";
import Login from "./components/Login";
import Register from "./components/Register";
import AddTask from "./components/AddTask";
import ListTasks from "./components/ListTasks";

// import the reducer
import { userReducer } from "./reducers/user.reducer";
// import 
import { taskReducer } from "./reducers/task.reducer";


const defaultTasks = [
  {
    name: "Coding",
    description: "Coding in javascript",
    completed: true
  },
  {
    name: "Eating",
    description: "Eat sukuma wiki for lunch",
    completed: false
  },
  {
    name: "Walking",
    description: "Walking as part of exercise",
    completed: false
  }
]

function App() {
    
  
  // const [ user, setUser ] = useState('Isaac');

  // managing user state with useReducer hook
  const [loggedUser, dispatch ] = useReducer(userReducer, {
    user: ""
  });

  // managing tasks state with useReducer
  const [tasks, dispatchTasks] = useReducer(taskReducer, defaultTasks);

  const { user } = loggedUser;



  // const [tasks, setTasks] = useState(defaultTasks);
  return (
    <React.Fragment>
    <Header user={user} dispatch={dispatch}/>
    <section id="content">
    { !user ? <section className="user">
    <Login dispatch={dispatch}/>
    <Register dispatch={dispatch}/>
    </section> : (
    <React.Fragment>
    <AddTask dispatch={dispatchTasks}/>
    <ListTasks tasks={tasks} dispatch={dispatchTasks} />
    </React.Fragment>
    )
  }
    </section>
    </React.Fragment>
  );
}

export default App;
