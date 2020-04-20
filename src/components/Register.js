import React from 'react';

const Register = () => (
    <article id="register-form">
         <h3>Register Here</h3>
    <div className="divider"></div>
     <form>
         <input type="text" name="username" id="username" placeholder="username" />
         <input type="email" name="email" id="email" placeholder="email address" />
         <input type="password" name="email" id="password" placeholder="password" />
         <input type="password" name="confirmPassword" id="confirmPassword" placeholder="confirm password" />
     </form>
     <span className="btn"><button type="submit">login</button></span>
     <span className="non-member-text">already a member?. click here to login</span>
    </article>
);

export default Register