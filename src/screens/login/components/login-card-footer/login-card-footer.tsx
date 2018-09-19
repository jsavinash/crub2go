import * as React from "react"
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from './login-card-footer-style';
import { addNavigationHelpers, NavigationState } from 'react-navigation';
import { Dispatch } from 'redux';
import { createReduxBoundAddListener } from 'react-navigation-redux-helpers';
interface LoginCardFooterProps {
    nav: NavigationState
    dispatch: Dispatch
}
export const LoginCardFooter: React.StatelessComponent<LoginCardFooterProps> = (props) => {
    const navigation = addNavigationHelpers({
        dispatch: props.dispatch,
        state: props.nav,
        addListener: createReduxBoundAddListener('root'),
    });
    return (
        <View style={styles.container}>
            <View style={styles.containerIn}>
                <TouchableOpacity style={styles.txtTouch}
                    onPress={() => { navigation.navigate('ForgotPassword') }}>
                    <Text style={styles.containerInTxt}>Forgot Password?</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

