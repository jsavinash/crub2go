import * as React from "react";
import { IForgotPasswordState } from '@models';
import Spinner from 'react-native-loading-spinner-overlay';

export interface ForgotLoaderProps {
    forgotParams: IForgotPasswordState,
}
export interface ForgotLoaderState {
    loader: boolean
}
export class ForgotLoader extends React.Component<ForgotLoaderProps, ForgotLoaderState> {
    constructor(props: ForgotLoaderProps) {
        super(props);
        this.state = {
            loader: false
        };
    }

    componentWillReceiveProps(nextProps: ForgotLoaderProps) {
        const { isLoading } = nextProps['forgotParams'];
        if (isLoading)
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
