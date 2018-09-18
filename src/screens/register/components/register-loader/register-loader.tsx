import * as React from "react";
import { ILogin } from '@models';
import Spinner from 'react-native-loading-spinner-overlay';

export interface RegisterLoaderProps {
    loginParams: ILogin,
}
export interface RegisterLoaderState {
    loader: boolean
}
export class RegisterLoader extends React.Component<RegisterLoaderProps, RegisterLoaderState> {
    constructor(props: RegisterLoaderProps) {
        super(props);
        this.state = {
            loader: false
        };
    }

    componentWillReceiveProps(nextProps: RegisterLoaderProps) {
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
