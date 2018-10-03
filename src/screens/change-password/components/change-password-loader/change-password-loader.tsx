import * as React from "react";
import { IChangePasswordState } from '@models';
import Spinner from 'react-native-loading-spinner-overlay';

export interface ChangePasswordProps {
    changePasswordParams: IChangePasswordState,
}
export interface ChangePasswordState {
    loader: boolean
}
export class ChangePasswordLoader extends React.Component<ChangePasswordProps, ChangePasswordState> {
    constructor(props: ChangePasswordProps) {
        super(props);
        this.state = {
            loader: false
        };
    }

    componentWillReceiveProps(nextProps: ChangePasswordProps) {
        const { isLoading } = nextProps['changePasswordParams'];
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
