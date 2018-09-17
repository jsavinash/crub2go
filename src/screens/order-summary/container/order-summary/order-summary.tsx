import * as React from "react";
import { View, Text } from "react-native";
import { styles } from './order-summary-style';
import { OrderSummaryCard } from '../../components';

export interface OrderSummaryProps {
    navigation: any
}
interface OrderSummaryState {

}
export class OrderSummary extends React.Component<OrderSummaryProps, OrderSummaryState> {
    constructor(props: OrderSummaryProps) {
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
                <OrderSummaryCard />
            </View>
        )
    }
}
