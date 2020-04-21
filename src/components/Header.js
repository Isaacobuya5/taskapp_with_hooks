import React from 'react';
import Logout from "./Logout";

const Header = ({user, setUser}) => {

let loggedInUser = user ? user : 'guest'
return (
    <header>
        <h3>todo app with hooks</h3>
<span className="user-text">
    Welcome {loggedInUser}
    {user ? <Logout setUser={setUser}/> : ''}
    </span>
    </header>
);
}
export default Header;