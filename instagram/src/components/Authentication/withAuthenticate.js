import React from 'react';

const withAuthenticate = Component => {
    return (
        class extends React.Component {
            constructor() {
                super();
            }

            render() {

                return <Component/>
            }
        }
    )
}

export default withAuthenticate;