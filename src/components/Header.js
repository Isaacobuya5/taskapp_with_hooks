import React, { useContext } from 'react';
import Logout from "./Logout";

import { StateContext } from "../contexts/contexts";

const Header = () => {

const { state } = useContext(StateContext);

const { user } = state;

return (
    <header>
        <h3>todo app with hooks</h3>
<span className="user-text">
    Welcome {user ? (
<React.Fragment>{user.user.email}</React.Fragment>
    ) : "guest"}
    {user ? <Logout /> : ''}
    </span>
    </header>
);
}
export default Header;