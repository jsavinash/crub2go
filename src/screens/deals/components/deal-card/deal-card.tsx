import * as React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import { styles } from './deal-card-style';
import { IDeals } from "@models";
import { Dimensions } from 'react-native';
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
export interface DealCardProps {
    deals: IDeals[],
    restaurantName: any,
    checkoutAction: (checkout: any) => any,
    checkoutParams: any,
    navigation: any

}
export const DealCard: React.StatelessComponent<DealCardProps> = (props) => {
    const onselect = (deals: any) => {
        const { checkoutParams, checkoutAction, navigation } = props;
        const cpyCheckoutParams = checkoutParams;
        cpyCheckoutParams.promo_code = deals['coupon_code'];
        checkoutAction(cpyCheckoutParams);
        navigation.goBack();
    }


    return (
        <View>
            {props.deals.length > 0 ?
                <ScrollView
                    onScroll={(e: any) => {
                        let paddingToBottom = 10;
                        paddingToBottom += e.nativeEvent.layoutMeasurement.height;
                        if (e.nativeEvent.contentOffset.y >= e.nativeEvent.contentSize.height - paddingToBottom) {
                            //  this.props.reactToEnd();
                        }
                    }}
                    pagingEnabled={true}>
                    <View style={styles.container}>
                        {props.deals.map((deals: any, idx: any) => {
                            console.log("deals", deals);
                            if (props.restaurantName) {
                                if ((deals.restaurant_name == props.restaurantName))
                                    return (
                                        <TouchableOpacity onPress={() => {
                                            onselect(deals);
                                        }} key={idx}>
                                            <View style={styles.card}>
                                                <Image
                                                    source={{ uri: deals.restaurant_image }}
                                                    style={styles.image} />
                                                <View style={styles.content}>
                                                    <View style={styles.scrollContainer}>
                                                        <Text style={styles.content1left}>{deals.restaurant_name}</Text>
                                                        <Text style={styles.content1right}>Coupon Code</Text>
                                                    </View>
                                                    <View style={styles.scrollContainer}>
                                                        <Text style={styles.content2left}>{deals.percentage} % off</Text>
                                                        <Text style={styles.content2right}>{deals.coupon_code}</Text>
                                                    </View>
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                    )
                            } else {
                                return (
                                    <TouchableOpacity onPress={() => {
                                    }} key={idx}>
                                        <View style={styles.card}>
                                            <Image
                                                source={{ uri: deals.restaurant_image }}
                                                style={styles.image} />
                                            <View style={styles.content}>
                                                <View style={styles.scrollContainer}>
                                                    <Text style={styles.content1left}>{deals.restaurant_name}</Text>
                                                    <Text style={styles.content1right}>Coupon Code</Text>
                                                </View>
                                                <View style={styles.scrollContainer}>
                                                    <Text style={styles.content2left}>{deals.percentage} % off</Text>
                                                    <Text style={styles.content2right}>{deals.coupon_code}</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                )
                            }
                        })}
                    </View>
                </ScrollView> :
                <View style={{
                    top: "90%",
                    alignSelf: 'center'
                }}>
                    <View style={{
                        width: ((SCREEN_WIDTH * 95) / 100),
                        height: ((SCREEN_HEIGHT * 18) / 100)
                    }}>
                        <Image
                            source={require('../../../../assets/app-images/img_noitems.png')}
                            resizeMode={'contain'}
                            style={{
                                width: ((SCREEN_WIDTH * 95) / 100),
                                height: ((SCREEN_HEIGHT * 15) / 100)
                            }}
                        ></Image>

                    </View>
                    <View>
                        <Text style={{
                            fontSize: 22,
                            textAlign: 'center'
                        }}>  No offers avilable currently</Text>
                    </View>
                </View>

            }
        </View>
    )
    // return (
    //     <View style={{
    //         top: "40%",
    //         position: 'absolute',
    //         alignSelf: 'center'
    //     }}>
    //         <View style={{
    //             width: ((SCREEN_WIDTH * 95) / 100),
    //             height: ((SCREEN_HEIGHT * 18) / 100)
    //         }}>
    //             <Image
    //                 source={require('../../../../assets/app-images/img_noitems.png')}
    //                 resizeMode={'contain'}
    //                 style={{
    //                     width: ((SCREEN_WIDTH * 95) / 100),
    //                     height: ((SCREEN_HEIGHT * 15) / 100)
    //                 }}
    //             ></Image>

    //         </View>
    //         <View>
    //             <Text style={{
    //                 fontSize: 22,
    //                 textAlign: 'center'
    //             }}>  No any order yet</Text>
    //         </View>
    //     </View>
    // )


}
