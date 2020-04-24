import React, {useState, useReducer} from 'react';

import Header from "./components/Header";
import Login from "./components/Login";
import Register from "./components/Register";
import AddTask from "./components/AddTask";
import ListTasks from "./components/ListTasks";

// import the reducer
// import { userReducer } from "./reducers/user.reducer";
// import 
// import { taskReducer } from "./reducers/task.reducer";
import { rootReducer } from "../src/reducers/rootReducer";
import { StateContext } from "./contexts/contexts";


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
  // const [loggedUser, dispatch ] = useReducer(userReducer, {
  //   user: ""
  // });

  // managing tasks state with useReducer
  // const [tasks, dispatchTasks] = useReducer(taskReducer, defaultTasks);

  // managing both reducers with one useReducer function
  const [state, dispatch] = useReducer(rootReducer, {
    user: '',
    tasks: defaultTasks
  })

const { user, tasks } = state;

  // const [tasks, setTasks] = useState(defaultTasks);
  return (
    <StateContext.Provider value={{ state, dispatch }}>
    <React.Fragment>
    <Header />
    <section id="content">
    { !user ? <section className="user">
    <Login />
    <Register />
    </section> : (
    <React.Fragment>
    <AddTask dispatch={dispatch}/>
    <ListTasks tasks={tasks} dispatch={dispatch} />
    </React.Fragment>
    )
  }
    </section>
    </React.Fragment>
    </StateContext.Provider>
  );
}

export default App;
