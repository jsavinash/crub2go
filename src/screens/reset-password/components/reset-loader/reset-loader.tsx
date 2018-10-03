import * as React from "react";
import { ILoginState } from '@models';
import Spinner from 'react-native-loading-spinner-overlay';

export interface ResetLoaderProps {
    resetParams: ILoginState,
}
export interface ResetLoaderState {
    loader: boolean
}
export class ResetLoader extends React.Component<ResetLoaderProps, ResetLoaderState> {
    constructor(props: ResetLoaderProps) {
        super(props);
        this.state = {
            loader: false
        };
    }

    componentWillReceiveProps(nextProps: ResetLoaderProps) {
        const { isLoading } = nextProps['resetParams'];
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
