import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from './skip-style';
import { addNavigationHelpers, NavigationState } from 'react-navigation';
import { Dispatch } from 'redux';
import { createReduxBoundAddListener } from 'react-navigation-redux-helpers';
export interface SkipProps {
    nav: NavigationState
    dispatch: Dispatch
}
export const Skip: React.StatelessComponent<SkipProps> = (props) => {
    const navigation = addNavigationHelpers({
        dispatch: props.dispatch,
        state: props.nav,
        addListener: createReduxBoundAddListener('root'),
    });
    const navigateTo = () => {
        navigation.navigate('Home');
    }
    return (
        <View style={styles.container}>
            <View style={styles.div1}>
                <TouchableOpacity style={styles.touch} onPress={() => {
                    navigateTo();
                }}>
                    <Text style={styles.txt1}>Skip</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
