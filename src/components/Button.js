import React from "react";


const Button = ({value, dispatch, task, action}) => (
    <button 
    type="submit"
    style={{ margin: 0, display: "inline-block"}}
    onClick={() => dispatch(action(task))}
    >{value}
    </button>
);

export default Button;