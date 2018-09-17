import * as React from "react";
import { View, Text } from "react-native";
import { styles } from './order-style';
import { OrderCard } from '../../components';
import { ICustomer } from '@models';
import { NavigationActions } from 'react-navigation';
export interface OrderProps {
    navigation: any,
    customer: ICustomer
}
interface OrderState {

}
export class Order extends React.Component<OrderProps, OrderState> {
    constructor(props: OrderProps) {
        super(props);
        if (!this.props.customer['user_access_token'])
            this.props.navigation.dispatch(NavigationActions.reset(
                {
                    index: 0,
                    actions: [
                        NavigationActions.navigate({ routeName: 'Login' })
                    ]
                }));
    }
    componentDidMount() {

    }
    render() {
        if (this.props.customer['user_access_token']) {
            return (
                <View style={styles.container}>
                    <View style={styles.headerContainer}>
                        <Text style={styles.headerText}>My Orders</Text>
                    </View>
                    <OrderCard />
                </View>
            )
        } else {
            return (
                <View />
            )
        }
    }
}
