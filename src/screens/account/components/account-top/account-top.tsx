import * as React from "react";
import { View, Text, Image, TouchableHighlight } from "react-native";
import { styles } from './account-top-style';
import { ICustomer } from '@models';
import { addNavigationHelpers, NavigationState } from 'react-navigation';
import { Dispatch } from 'redux';
import { createReduxBoundAddListener } from 'react-navigation-redux-helpers';
export interface AccountTopProps {
    customer?: ICustomer,
    nav: NavigationState
    dispatch: Dispatch
}
export const AccountTop: React.StatelessComponent<AccountTopProps> = (props) => {
    const navigation = addNavigationHelpers({
        dispatch: props.dispatch,
        state: props.nav,
        addListener: createReduxBoundAddListener('root'),
    });
    const navigateTo = () => {
        navigation.navigate('EditProfile');
    }
    return (
        <View style={styles.topContainer}>
            <Text
                style={styles.txt}>My Account</Text>
            <View style={styles.img1}>
                <TouchableHighlight onPress={navigateTo}>
                    <Image
                        source={(props.customer && props.customer.user_profile) ? { uri: props.customer.user_profile } : require('../../../../assets/app-images/started_user.png')}
                        resizeMode="cover"
                        style={styles.img}>
                    </Image>
                </TouchableHighlight>
            </View>
            <Text style={styles.txt1}>{props['customer']['user_name']}</Text>
            <Text style={styles.txt2}>{props['customer']['user_mobile_number']}</Text>
        </View>
    )
}
