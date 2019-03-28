import React from 'react';
import PropTypes from 'prop-types';

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        }
    }

    // Update Username

    updateUsername = event => {
        this.setState({
            username: event.target.value
        })
    }

    // Update Password

    updatePassword = event => {
        this.setState({
            password: event.target.value
        })
    }

    // Login Function

    login = () => {
        localStorage.setItem('username', this.state.username);
        localStorage.setItem('password', this.state.password);
    }

    render() {
        return (
            <form className="login-form">
                <input placeholder="Username" onChange={this.updateUsername}/>
                <input placeholder="Password" onChange={this.updatePassword}/>
                <button onClick={this.login}>Log In</button>
            </form>
        )
    }
}

// Prop Types

Login.propTypes = {
    updateUsername: PropTypes.func,
    updatePassword: PropTypes.func,
    login: PropTypes.func
}

export default Login;