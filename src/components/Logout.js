import React from 'react';

import { logoutUser } from "../actions/user.actions";

const Logout = ({dispatch}) => (
    <button 
    type="submit" 
    className="logout-btn"
    onClick={(event) => {
       event.preventDefault();
    //    setUser('');
    dispatch(logoutUser());
    }}
    >
    Logout
    </button>
);

export default Logout;