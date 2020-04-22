import React, {useState} from 'react';

import Header from "./components/Header";
import Login from "./components/Login";
import Register from "./components/Register";
import AddTask from "./components/AddTask";
import ListTasks from "./components/ListTasks";


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
    
  // user state
  const [ user, setUser ] = useState('Isaac');
  // tasks state

  const [tasks, setTasks] = useState(defaultTasks);
  return (
    <React.Fragment>
    <Header user={user} setUser={setUser}/>
    <section id="content">
    { !user ? <section className="user">
    <Login setUser={setUser}/>
    <Register setUser={setUser}/>
    </section> : (
    <React.Fragment>
    <AddTask tasks={tasks} setTasks={setTasks}/>
    <ListTasks tasks={tasks} />
    </React.Fragment>
    )
  }
    </section>
    </React.Fragment>
  );
}

export default App;
