import React from 'react';

const Logout = ({setUser}) => (
    <button 
    type="submit" 
    className="logout-btn"
    onClick={(event) => {
       event.preventDefault();
       setUser('');
    }}
    >
    Logout
    </button>
);

export default Logout;