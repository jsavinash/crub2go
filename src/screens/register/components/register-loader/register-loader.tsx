import * as React from "react";
import { IRegisterState } from '@models';
import Spinner from 'react-native-loading-spinner-overlay';

export interface RegisterLoaderProps {
    registerParams: IRegisterState,
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
        console.log("nextProps['registerParams']", nextProps['registerParams']);
        const { isLoading } = nextProps['registerParams'];
        if (isLoading)
            this.setState({ loader: true });
        else
            this.setState({ loader: false });
    }

    
    render() {
        console.log("this.state.loader", this.state.loader);
        return (
            <Spinner visible={this.state.loader} textStyle={{ color: '#FFF' }} />
        )
    }
}
