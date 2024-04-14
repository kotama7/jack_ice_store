import React from 'react';

import { AppBar } from 'react-admin';

// import Typography from '@material-ui/core/Typography';

import logo from '../../public/logo.png';

export default class MyAppBar extends React.Component {

    constructor(props: any) {
        super(props);
    }

    render(): JSX.Element {
        return (
            <AppBar color="primary" position="sticky">
                <img src={logo} width="100" alt="Ice Shop" />
                {/* <Typography variant="h6" color="inherit" component="div">
                    ICE SHOP JACK
                </Typography> */}
                ICE SHOP JACK
            </AppBar>
        );
    }

}