import React from 'react';

const withAuthenticate = FirstComponent => SecondComponent => props => {

    if (localStorage.getItem('username')) {
        return <FirstComponent {...props}/>
    } else {
        return <SecondComponent {...props}/>
    }
}

export default withAuthenticate;