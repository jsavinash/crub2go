import * as React from "react"
import { StatusBar, StyleSheet, View, Dimensions, Text } from 'react-native';
import { connect } from 'react-redux';
import { REDUX_PERSIST as ReduxPersist } from '@config';
import ReduxNavigation from './navigations/ReduxNavigation';
import { reduxStartup } from '@state_action';
import { withNetworkConnectivity } from 'react-native-offline';
import BottomCheckout from './components/common/bottom-checkout';
import CheckoutActionSheet from './components/common/checkout-actionsheet';
import PayNow from './components/common/pay-now';

import FlashMessage from "react-native-flash-message";
import Orientation from 'react-native-orientation';
interface IProps {
    startup: () => void
}

class RootContainer extends React.Component<IProps> {
    public componentDidMount() {
        // if redux persist is not active fire startup action
        if (!ReduxPersist.active) {
            this.props.startup()
        }
        Orientation.lockToPortrait();
    }

    public render() {
        return (
            <View style={styles.applicationView}>
                <StatusBar barStyle="light-content" />
                <ReduxNavigation />
                <FlashMessage ref="myLocalFlashMessage"
                    position={'top'} />   {/* <--- here as last component always with `ref` */}
                <BottomCheckout />
                <CheckoutActionSheet />
                <PayNow/>
            </View>
        )
    }
}

const mapDispatchToProps = {
    startup: reduxStartup,
}
RootContainer = withNetworkConnectivity({
    withRedux: true // It won't inject isConnected as a prop in this case
})(RootContainer);

export default connect<{}, IProps>(null, mapDispatchToProps)(RootContainer)

const styles = StyleSheet.create({
    applicationView: {
        flex: 1,
    },
})
