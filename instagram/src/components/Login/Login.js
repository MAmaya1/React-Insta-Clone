import React from 'react';

const Login = props => {

    return (
        <form className="login-form">
            <input placeholder="Username"/>
            <input placeholder="Password"/>
            <button onClick={props.login}>Log In</button>
        </form>
    )
}

export default Login;