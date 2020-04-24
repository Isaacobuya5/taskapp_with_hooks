import React from 'react';
import Logout from "./Logout";

const Header = ({user, dispatch}) => {
// let loggedInUser = user ? user : 'guest'


return (
    <header>
        <h3>todo app with hooks</h3>
<span className="user-text">
    Welcome {user ? (
<React.Fragment>{user.user.email}</React.Fragment>
    ) : "guest"}
    {user ? <Logout dispatch={dispatch}/> : ''}
    </span>
    </header>
);
}
export default Header;