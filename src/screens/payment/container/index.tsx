import * as React from "react";
import { ScrollView, View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import { ICustomerCard } from '@models';
import { CardRestService } from '../../../services';
import { transformToFromData } from "@common_service";
import SplashScreen from 'react-native-splash-screen';
import FAB from 'react-native-fab';
import Icon from 'react-native-vector-icons/FontAwesome';
import { OrderRestService } from '../../../services';
export interface PaymentProps {
    cards: any,
    listCards: (data: any[]) => any,
    customer: any,
    navigation: any,
    checkoutParamsAction: (checkout: any) => any,
    checkoutParams: any,
    total: any
}
interface PaymentState {

}

export class Payment extends React.Component<PaymentProps, PaymentState> {
    constructor(props: PaymentProps) {
        super(props)
    }
    componentDidMount() {
        SplashScreen.hide();
        this.getCard();

    }
    getCard = () => {
        let token = this.props.customer['user_access_token'];
        let cardParams: ICustomerCard = {
            user_stripe_id: "cus_DWXvlTTqnUG6SW"
        };
        CardRestService.listCard(transformToFromData(cardParams), token).then((success: any) => {
            if (success['data']['settings']['success'] == 1) {
                this.props.listCards(success['data']['data'][0]['customer_cards']);
            } else if (success['data']['settings']['success'] == 0) {
            }
        }).catch((error) => {
            console.log("error", error);
        })
    }
    private onCardSelect = (card: any) => {
        console.log('card', card);
        const { total, customer, checkoutParams } = this.props;
        let cpyCheckoutParams = { ...checkoutParams };
        let stripId = customer['user_stripe_id'];
        let token = customer['user_access_token'];
        let grandTotal = total['cart_grand_total'];
        let cardId = card['id'];
        cpyCheckoutParams['cart_grand_total'] = grandTotal;
        cpyCheckoutParams['user_stripe_id'] = stripId;
        cpyCheckoutParams['card_id'] = cardId;
        delete cpyCheckoutParams['promo_code'];
        delete cpyCheckoutParams['isCheckoutSheet'];
        delete cpyCheckoutParams['isCheckoutSubmit'];
        delete cpyCheckoutParams['time12'];
        delete cpyCheckoutParams['isError'];
        delete cpyCheckoutParams['error'];
        OrderRestService.placeOrder(transformToFromData(cpyCheckoutParams), token).then((success: any) => {
            console.log("success['data']", success);
            if (success['data']['settings']['success'] == 1) {
                this.props.navigation.navigate('PaymentSuccess', { data: success['data']['data'] });
            } else if (success['data']['settings']['success'] == 0) {

            }
        }).catch((error) => {

        })



        // }
    }

    render() {
        const MasterCard = <Image
            source={require('../../../assets/app-images/img_mastrcrd.png')}
            style={styles.img}>
        </Image>
        const VisaCard = <Image
            source={require('../../../assets/app-images/img_visa.png')}
            style={styles.img}>
        </Image>
        const AmericanExpressCard = <Image
            source={require('../../../assets/app-images/img_americanexp.png')}
            style={styles.img}>
        </Image>
        return (
            <View style={{
                flex: 1
            }}>
                <ScrollView contentContainerStyle={styles.container}>
                    {
                        this.props.cards.map((card: any, idx: number) => {
                            let CardName: any = AmericanExpressCard;
                            if (card.brand == "MasterCard") {
                                CardName = MasterCard;
                            } else if (card.brand == "VisaCard") {
                                CardName = VisaCard;
                            } else {
                                CardName = AmericanExpressCard;
                            }
                            return (
                                <TouchableOpacity key={idx} onPress={() => {
                                    this.onCardSelect(card);
                                }}>
                                    <View style={{
                                        flex: 1
                                    }} >
                                        {CardName}
                                        <Text style={styles.txt}>{card.brand}</Text>
                                        <Text style={styles.txt2}>**** **** **** {card.last4}</Text>
                                    </View>
                                </TouchableOpacity>
                            )
                        })
                    }
                </ScrollView>
                <FAB buttonColor="red" iconTextColor="#FFFFFF" onClickAction={() => { this.props.navigation.navigate('AddCard'); }} visible={true} iconTextComponent={<Icon name="plus" />} />
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {

    },
    img: {
        height: 200,
        width: 350,
        margin: 5,
        borderRadius: 20
    },
    txt: {
        position: 'absolute',
        bottom: '30%',
        left: '6%',
        color: 'white',
        fontSize: 26
    },
    txt2:
    {
        position: 'absolute',
        bottom: '15%',
        left: '6%',
        color: 'white',
        fontSize: 22,
        width: '100%'
    }
})