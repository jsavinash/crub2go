import * as React from "react";
import { View, Text } from "react-native";
import { styles } from './order-style';
import { OrderCard } from '../../components';

export interface OrderProps {
    navigation: any
}
interface OrderState {

}
export class Order extends React.Component<OrderProps, OrderState> {
    constructor(props: OrderProps) {
        super(props);

    }
    componentDidMount() {

    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <Text style={styles.headerText}>My Orders</Text>
                </View>
                <OrderCard />
            </View>
        )
    }
}
