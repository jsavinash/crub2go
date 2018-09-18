import * as React from "react";
import { ILogin } from '@models';
import Spinner from 'react-native-loading-spinner-overlay';

export interface LoginLoaderProps {
    loginParams: ILogin,
}
export interface LoginLoaderState {
    loader: boolean
}
export class LoginLoader extends React.Component<LoginLoaderProps, LoginLoaderState> {
    constructor(props: LoginLoaderProps) {
        super(props);
        this.state = {
            loader: false
        };
    }

    componentWillReceiveProps(nextProps: LoginLoaderProps) {
        console.log("nextProps.loginParams", nextProps.loginParams);
        const { isLoading } = nextProps.loginParams;
        if (isLoading && isLoading == true)
            this.setState({ loader: true });
        else
            this.setState({ loader: false });
    }

    render() {
        return (
            <Spinner visible={this.state.loader} textStyle={{ color: '#FFF' }} />
        )
    }
}
