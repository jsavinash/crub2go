import * as React from "react";
import { ILoginState } from '@models';
import Spinner from 'react-native-loading-spinner-overlay';

export interface CardLoaderProps {
    resetParams: ILoginState,
}
export interface CardLoaderPropsState {
    loader: boolean
}
export class CardLoader extends React.Component<CardLoaderProps, CardLoaderPropsState> {
    constructor(props: CardLoaderProps) {
        super(props);
        this.state = {
            loader: false
        };
    }

    componentWillReceiveProps(nextProps: CardLoaderProps) {
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
