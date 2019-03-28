import React from 'react';

const withAuthenticate = FirstComponent => SecondComponent => {
    return class extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                loggedIn: false
            }
        }

        componentDidMount() {
            if (localStorage.getItem('username') && (localStorage.getItem('password'))) {
                this.setState({
                    loggedIn: true
                })
            }
        }

        render() {

            if (this.state.loggedIn === true) {
                return <FirstComponent {...this.props}/>
            } else {
                return <SecondComponent {...this.props}/>
            }
        }
    
    }
}

export default withAuthenticate;