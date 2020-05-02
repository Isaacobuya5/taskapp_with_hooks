import React, { useReducer, useEffect } from 'react';

import { useResource } from "react-request-hook";

import Header from "./components/Header";
import Login from "./components/Login";
import Register from "./components/Register";
import AddTask from "./components/AddTask";
import ListTasks from "./components/ListTasks";

import { rootReducer } from "../src/reducers/rootReducer";
import { StateContext } from "./contexts/contexts";

import { fetchTasks } from "./actions/task.actions";


function App() {

  // managing both reducers with one useReducer function
  const [state, dispatch] = useReducer(rootReducer, {
    user: '',
    tasks: []
  });

const { user } = state;

// hook for fetching tasks from server
const [tasks, getTasks] = useResource(() => ({
    url: "/tasks",
    method: "get"
}));

 // fetch tasks on component mount
 useEffect(getTasks, []);

 // another useEffect to dispatch action fetchUser 
 useEffect(() => {
   // in case of an error
   if (tasks && tasks.error) {
     console.log("dispatch error action")
   }

   if (tasks && tasks.data) {
      dispatch(fetchTasks(tasks.data));
   }
 }, [tasks]);

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
    <AddTask />
    <ListTasks />
    </React.Fragment>
    )
  }
    </section>
    </React.Fragment>
    </StateContext.Provider>
  );
}

export default App;
