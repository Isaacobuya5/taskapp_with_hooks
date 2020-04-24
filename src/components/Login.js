import React,{useState} from 'react';
import { loginUser } from "../actions/user.actions";

const Login = ({dispatch}) => {

    // state for form inputs
    const [login, setLogin] = useState({
        email: '',
        password: ''
    });
    
    // change fields dynamically
    function handleChange(event) {
        event.preventDefault();
        const { name, value } = event.target;
        setLogin({
            ...login,
            [name]: value
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        dispatch(loginUser(login));
    }


    // destructure login
    const { email, password} = login;
return (
    <article id="login-form">
    <h3>Login Here</h3>
    <div className="divider"></div>
     <form>
         <input 
         type="email" 
         name="email" 
         id="email" 
         placeholder="email address" 
         value={email}
         onChange={handleChange}
         />
         <input 
         type="password" 
         name="password" 
         id="password" 
         placeholder="password" 
         value={password}
         onChange={handleChange}
         />
     </form>
     <span className="btn">
         <button 
         type="submit"
         onClick={handleSubmit}
         >login
         </button></span>
     <span className="non-member-text">Not a registered yet?. Click here to register</span>
    </article>
);

}

export default Login;