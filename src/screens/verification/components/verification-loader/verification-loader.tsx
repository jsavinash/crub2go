import * as React from "react";
import { IRegister } from '@models';
import Spinner from 'react-native-loading-spinner-overlay';

export interface VerificationLoaderProps {
    registerParams: IRegister,
}
export interface VerificationLoaderState {
    loader: boolean
}
export class VerificationLoader extends React.Component<VerificationLoaderProps, VerificationLoaderState> {
    constructor(props: VerificationLoaderProps) {
        super(props);
        this.state = {
            loader: false
        };
    }

    componentWillReceiveProps(nextProps: VerificationLoaderProps) {
        const { isLoading } = nextProps['registerParams'];
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
