import React from 'react';

const withAuthenticate = FirstComponent => SecondComponent => props => {
    // return class extends React.Component {
    //     constructor(props) {
    //         super(props);

    //         this.state = {
    //             loggedIn: false
    //         }
    //     }

    //     componentDidMount() {
    //         if (localStorage.getItem('username')) {
    //             this.setState({
    //                 loggedIn: true
    //             })
    //         }
    //     }

    //     render() {

    //         if (this.state.loggedIn === true) {
    //             return <FirstComponent {...props}/>
    //         } else {
    //             return <SecondComponent {...props}/>
    //         }
    //     }
    
    // }

    if (localStorage.getItem('username') === 'fozcat' && localStorage.getItem('password') === 'test') {
        return <FirstComponent {...props}/>
    } else {
        return <SecondComponent {...props}/>
    }
}

export default withAuthenticate;