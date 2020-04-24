import React, { useContext } from "react";

import { StateContext } from "../contexts/contexts";

import { logoutUser } from "../actions/user.actions";

const Logout = () => {
  const { dispatch } = useContext(StateContext);
  return (
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
};

export default Logout;
