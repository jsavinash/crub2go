import * as React from "react";
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { addNavigationHelpers, NavigationState } from 'react-navigation';
import { Dispatch } from 'redux';
import { createReduxBoundAddListener } from 'react-navigation-redux-helpers';
import { NavigationActions } from 'react-navigation';

import { styles } from './header-style';
export interface HeaderProps {
    nav: NavigationState
    dispatch: Dispatch
}
export const Header: React.StatelessComponent<HeaderProps> = (props) => {
    const navigation = addNavigationHelpers({
        dispatch: props.dispatch,
        state: props.nav,
        addListener: createReduxBoundAddListener('root'),
    });
    const goBack = () => {
        navigation.dispatch(NavigationActions.back())
    }
    return (
        <View style={styles.container}>
            <View style={styles.imageContent}>
                <TouchableOpacity onPress={() => {
                    goBack()
                }}>
                    <Image
                        source={require('../../../../assets/app-images/close_btn_s_3b.png')}
                        style={styles.image}
                    ></Image>
                </TouchableOpacity>
            </View>
            <View style={styles.textContent}>
                <Text style={styles.contentTxt1}>Checkout</Text>
                <Text style={styles.contentTxt2}>TGB Cafe n Bakery</Text>
            </View>
        </View>
    )
}

