import * as React from "react";
import { View, Text, Image, ScrollView } from 'react-native'
import { styles } from './order-summary-card-style';
import { showAlert, transformToFromData, logger } from '@common_service';
import { OrderRestService } from '../../../../services';
import {
    InternalServerError, InternalServerErrorTitle
} from '@constant';
export interface OrderCardProps {
    selectedOrderItemAction: (checkout: any) => any,
    selectedOrderDetailAction: (detail: any) => any,
    token: any,
    selectedOrder: any,
    selectedOrderItem: any,
    selectedOrderDetail: any,
}
export class OrderSummaryCard extends React.Component<OrderCardProps, {}> {
    constructor(props: OrderCardProps) {
        super(props);
    }
    componentDidMount() {
        this.orderDetail();
    }
   
    private orderDetail = () => {
        const { token, selectedOrder, selectedOrderDetailAction, selectedOrderItemAction } = this.props;
        OrderRestService.orderDetails(transformToFromData({ order_id: selectedOrder['order_id'] }), token).then((orderDetailData: any) => {
            if (orderDetailData['data']['settings']['success'] == 1) {
                selectedOrderItemAction(orderDetailData['data']['data']['order_items'])
                selectedOrderDetailAction(orderDetailData['data']['data']['order_details'][0]);
            }
        }).catch((error) => {
            logger('Order Summary', 'ERROR', error);
            showAlert(InternalServerErrorTitle, InternalServerError, 'warning');
        })
    }
    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.card}>
                        <View style={styles.margin}>
                            <View style={styles.flexColumn}>
                                <View>
                                    <Image
                                        source={{ uri: this.props.selectedOrder['restaurant_image'] }}
                                        resizeMode={'cover'}
                                        style={styles.image} />
                                </View>
                                <View style={styles.flexColumn}>
                                    <Text style={styles.txt1}>{this.props.selectedOrder['order_status']}</Text>
                                    <Text style={styles.txt2}>{this.props.selectedOrder['order_pickup_time']}</Text>
                                    <Text style={styles.txt3}>Order Id: {this.props.selectedOrder['order_id']}</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.border}></View>
                    </View>
                </View>
            </ScrollView>
        )
    }
}
