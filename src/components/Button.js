import React from "react";

const Button = ({value}) => (
    <button 
    type="submit"
    style={{ margin: 0, display: "inline-block"}}
    >{value}
    </button>
);

export default Button;