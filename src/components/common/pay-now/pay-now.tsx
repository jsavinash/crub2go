import * as React from "react";
import { View, Text, TouchableOpacity } from 'react-native';
import { addNavigationHelpers, NavigationState, NavigationActions } from 'react-navigation';
import { Dispatch } from 'redux';
import { createReduxBoundAddListener } from 'react-navigation-redux-helpers';
import { styles } from './pay-now-style';
import { ICartResponse, ICartTotal } from '@models';
import { Button } from 'react-native-elements';
import { transformToFromData } from "@common_service";
import { OrderRestService } from "../../../services";
export interface PayNowProps {
    cart: ICartResponse[],
    total: string,
    nav: NavigationState
    dispatch: Dispatch,
    checkoutParams: any,
    token: string
}
interface PayNowState {

}
export class PayNow extends React.Component<PayNowProps, PayNowState> {
    private navigation = addNavigationHelpers({
        dispatch: this.props.dispatch,
        state: this.props.nav,
        addListener: createReduxBoundAddListener('root'),
    });

    constructor(props: PayNowProps) {
        super(props);
    }

    private submit = () => {
        const { checkoutParams, token } = this.props;
        OrderRestService.placeOrder(transformToFromData(checkoutParams), token).then((success: any) => {
            if (success['data']['settings']['success'] == 1) {
                this.navigation.dispatch(NavigationActions.reset(
                    {
                        index: 0,
                        actions: [
                            NavigationActions.navigate({ routeName: 'PaymentSuccess', params: {
                                data: success['data']['data']
                            }})
                        ]
                    }));
            
            } else if (success['data']['settings']['success'] == 0) {
                // this.navigation.dispatch(NavigationActions.reset(
                //     {
                //         index: 0,
                //         actions: [
                //             NavigationActions.navigate({ routeName: 'PaymentSuccess', params: {
                //                 data: success['data']['data']
                //             }})
                //         ]
                //     }));
            }
        }).catch((error) => {

        })
    }

    render() {
        const { total, cart, nav } = this.props;
        let currentRouteName = "";
        let previousRouteName = "";
        if(nav && nav['routes']){
        currentRouteName  = nav['routes'][nav['routes'].length - 1]['routeName'];
        }
        if(nav && nav['routes'] && nav['routes'].length > 1)
        previousRouteName  = nav['routes'][nav['routes'].length - 2]['routeName'];


        if (total && (cart.length > 0) && nav && nav['routes'] && (currentRouteName == "Payment") && (previousRouteName == "Checkout")) {
            return (
                <View>
                    <View style={styles.container}>
                        <View style={styles.div1}>
                            <Button
                                onPress={() => {
                                    this.submit();
                                }}
                                title="Pay Now"
                                buttonStyle={styles.btn}
                            />
                        </View>
                        <View style={styles.div2}>
                            <Text style={{
                                fontSize: 20,
                                color: 'black'
                            }}>{this.props.total}</Text>
                        </View>
                    </View>
                </View>
            )
        } else {
            return (
                <View />
            )
        }
    }
}


