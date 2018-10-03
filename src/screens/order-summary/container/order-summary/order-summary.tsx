import * as React from "react";
import { View, Text, ScrollView } from "react-native";
import { styles } from './order-summary-style';
import { OrderSummaryCard, Instruction, YourCart, Total, Call } from '../../components';

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
            <View style={{
                flex: 1, backgroundColor: 'white'
            }}>
                <ScrollView style={{
                    flexDirection: 'column',
                }}>
                    
                    <OrderSummaryCard />
                    <Instruction instructions={'Your Order'} />
                    <YourCart />
                    <Total />
                </ScrollView>
                <Call />
            </View>
        )
    }
}
