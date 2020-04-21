import React, {useState} from 'react';

import Header from "./components/Header";
import Login from "./components/Login";
import Register from "./components/Register";
import AddTask from "./components/AddTask";
import ListTasks from "./components/ListTasks";



function App() {
    
  // user state
  const [ user, setUser ] = useState('');
  return (
    <React.Fragment>
    <Header user={user} setUser={setUser}/>
    <section id="content">
    { !user ? <section className="user">
    <Login setUser={setUser}/>
    <Register setUser={setUser}/>
    </section> : ''}
    <AddTask />
    <ListTasks />
    </section>
    </React.Fragment>
  );
}

export default App;
