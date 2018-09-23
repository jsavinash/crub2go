import * as React from "react";
import { IAddCardState } from '@models';
import Spinner from 'react-native-loading-spinner-overlay';

export interface CardLoaderProps {
    cardAddParams: IAddCardState,
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
        const { isLoading } = nextProps['cardAddParams'];
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
