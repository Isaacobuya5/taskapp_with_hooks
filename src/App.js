import React from 'react';

import Header from "./components/Header";
import Login from "./components/Login";
import Register from "./components/Register";
import AddTask from "./components/AddTask";
import ListTasks from "./components/ListTasks";

function App() {
  return (
    <React.Fragment>
    <Header />
    <section id="content">
    <section className="user">
    <Login />
    <Register />
    </section>
    <AddTask />
    <ListTasks />
    </section>
    </React.Fragment>
  );
}

export default App;
