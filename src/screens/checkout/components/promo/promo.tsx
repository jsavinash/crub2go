import * as React from "react";
import { View, Text, TouchableOpacity } from 'react-native';
import { addNavigationHelpers, NavigationState } from 'react-navigation';
import { Dispatch } from 'redux';
import { createReduxBoundAddListener } from 'react-navigation-redux-helpers';
import { styles } from './promo-style';
import { Button } from 'react-native-elements';
import { ICheckoutParams } from '@models';
export interface PromoProps {
    checkoutParamsAction?: (checkout: ICheckoutParams) => void,
    checkoutParams?: ICheckoutParams,
    nav?: NavigationState,
    dispatch?: Dispatch,
    restaurant_name?: any
}
export const Promo: React.StatelessComponent<PromoProps> = (props) => {
    const navigation = addNavigationHelpers({
        dispatch: props.dispatch,
        state: props.nav,
        addListener: createReduxBoundAddListener('root'),
    });
    
    const navigateTo = (path: string) => {
        navigation.navigate(`${path}`, {restaurant_name: props.restaurant_name });
    }
    const apply = () => {

    }
    return (
        <View style={styles.container}>
            <View style={styles.margin}>
                <TouchableOpacity onPress={() => {
                    navigateTo('Deals');
                }}>
                    <View style={styles.rowContent}>
                        <View style={styles.content}>
                            <Text style={styles.contentTxt1}>Promo Code</Text>
                            <Text style={styles.contentTxt2}>{props.checkoutParams.promo_code}</Text>
                        </View>
                        <View>
                            <Button
                                onPress={() => { apply() }}
                                title="Apply"
                                buttonStyle={styles.containerInBtnStyle}
                                containerViewStyle={styles.containerInBtnCnt} />
                        </View>
                    </View>
                </TouchableOpacity>
                <View style={styles.border}></View>
            </View>
        </View>
    )
}

