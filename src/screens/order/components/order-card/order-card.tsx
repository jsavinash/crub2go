import * as React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import { styles } from './order-card-style';
import { showAlert, transformToFromData, logger } from '@common_service';
import { OrderRestService } from '../../../../services';
import {
    InternalServerError, InternalServerErrorTitle
} from '@constant';
export interface OrderCardProps {
    orders?: any,
    orderListAction: (checkout: any) => any,
    selectedOrderAction: (checkout: any) => any,
    customer: any
}
export class OrderCard extends React.Component<OrderCardProps, {}> {
    constructor(props: OrderCardProps) {
        super(props);

    }
    componentDidMount() {
        this.orders();
    }

    private onselect = (order: any) => {
        const _self = this;
        _self.props.selectedOrderAction(order)
    }

    private orders = () => {
        const { customer, orderListAction } = this.props;
        let construct: any[] = [];
        OrderRestService.myOrder(transformToFromData({
            num_records: 10,
            page_index: 1
        }), customer['user_access_token']).then((orderData: any) => {
            console.log("orderData['data']['data']", orderData['data']['data']);
            if (orderData['data']['settings']['success'] == 1) {
                construct
                orderData['data']['data'].forEach((order: any) => {
                    order['restaurant_image'] = order['restaurant_image'][0]
                    construct.push(order);
                });
                orderListAction(construct);
            }
        }).catch((error) => {
            console.log("error", error);
            logger('App Entry', 'ERROR', error);
            showAlert(InternalServerErrorTitle, InternalServerError, 'warning');
        })
    }
    render() {
        return (
            <ScrollView
                onScroll={(e: any) => {
                    let paddingToBottom = 10;
                    paddingToBottom += e.nativeEvent.layoutMeasurement.height;
                    if (e.nativeEvent.contentOffset.y >= e.nativeEvent.contentSize.height - paddingToBottom) {
                        //  this.props.reactToEnd();
                    }
                }}
                pagingEnabled={true} >
                <View style={styles.container}>
                    {this.props.orders.map((order: any, index: number) => {
                        return (
                            <TouchableOpacity onPress={() => {
                                this.onselect(order);
                            }}
                                key={index}>
                                <View style={styles.card}>
                                    <View style={styles.margin}>
                                        <View style={styles.flexColumn}>
                                            <View>
                                                <Image
                                                    source={{ uri: order['restaurant_image'] }}
                                                    resizeMode={'cover'}
                                                    style={styles.image} />
                                            </View>
                                            <View style={styles.flexColumn}>
                                                <Text style={styles.txt1}>{order['order_status']}</Text>
                                                <Text style={styles.txt2}>{order['order_pickup_time']}</Text>
                                                <Text style={styles.txt3}>Order Id: {order['order_id']}</Text>
                                            </View>
                                            <View style={styles.border}></View>
                                            <View >
                                                <Text style={styles.txt4}>Total ${order['order_total_amount_paid']}</Text>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={styles.border}></View>
                                </View>
                            </TouchableOpacity>
                        )
                    })
                    }
                </View>
            </ScrollView >
        )
    }
}
