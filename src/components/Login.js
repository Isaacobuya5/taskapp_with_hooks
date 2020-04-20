import React from 'react';

const Login = () => (
    <article id="login-form">
    <h3>Login Here</h3>
    <div className="divider"></div>
     <form>
         <input type="email" name="email" id="email" placeholder="email address" />
         <input type="password" name="password" id="password" placeholder="password" />
     </form>
     <span className="btn"><button type="submit">login</button></span>
     <span className="non-member-text">Not a registered yet?. Click here to register</span>
    </article>
);

export default Login;