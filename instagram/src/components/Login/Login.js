import React from 'react';

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            
        }
    }

    
    
    render() {
        return (
            <form className="login-form">
                <input placeholder="Username"/>
                <input placeholder="Password"/>
                <button onClick={this.login}>Log In</button>
            </form>
        )
    }
}