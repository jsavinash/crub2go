import * as React from "react";
import { View } from 'react-native';
import { addNavigationHelpers, NavigationState } from 'react-navigation';
import { Dispatch } from 'redux';
import { createReduxBoundAddListener } from 'react-navigation-redux-helpers';
export interface CHeckoutButtonProps {
    checkoutParams: any,
    nav: NavigationState
    dispatch: Dispatch
}
interface CHeckoutButtonState {


}

export class CHeckoutButton extends React.Component<CHeckoutButtonProps, CHeckoutButtonState> {
    private navigation = addNavigationHelpers({
        dispatch: this.props.dispatch,
        state: this.props.nav,
        addListener: createReduxBoundAddListener('root'),
    });
    constructor(props: CHeckoutButtonProps) {
        super(props);
    }
    componentDidMount() {
        if (this.props.checkoutParams['isCheckoutSubmit']) {
            this.navigation.navigate('Payment', { type: 'checkout' });
        }
    }

    render() {
        return (
            <View></View>
        )
    }
}

