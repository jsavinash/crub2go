import * as React from "react";
import { ScrollView, View, Dimensions, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import { ICustomerCard } from '@models';
import { CardRestService } from '../../../services';
import { transformToFromData } from "@common_service";
import SplashScreen from 'react-native-splash-screen';
import FAB from 'react-native-fab';
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
import Icon from 'react-native-vector-icons/FontAwesome';
import { ICustomer } from "@models";
export interface PaymentProps {
    cards: any,
    listCards: (data: any[]) => any,
    customer: ICustomer,
    navigation: any,
    checkoutParamsAction: (checkout: any) => any,
    checkoutParams: any,
    total: any,
    nav: any
}
interface PaymentState {
    selectedCard: any
}

export class Payment extends React.Component<PaymentProps, PaymentState> {
    constructor(props: PaymentProps) {
        super(props)

    }
    componentDidMount() {
        SplashScreen.hide();
        this.getCard();
        this.initState();

    }
    getCard = () => {
        const { customer } = this.props;
        let token = customer['user_access_token'];
        let stripId = customer['user_stripe_id']
        let cardParams: ICustomerCard = {
            user_stripe_id: stripId
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
    private initState = () => {
        let select: any = {};
        this.props.cards.map((crd: any) => {
            select[`${crd['id']}`] = false
        });
        this.setState({ selectedCard: select });
    }

    private onCardSelect = (card: any) => {
        const { selectedCard } = this.state;
        let select: any = {...selectedCard};
        select[`${card['id']}`] = !select[`${card['id']}`];
        if (this.props.nav && this.props.nav['routes'] && (this.props.nav['routes'][this.props.nav['routes'].length - 2]['routeName'] == "Checkout") && (this.props.nav['routes'].length > 1)){
            this.setState({ selectedCard: select });
        }
        const { total, customer, checkoutParams, checkoutParamsAction } = this.props;
        let cpyCheckoutParams = { ...checkoutParams };
        let stripId = customer['user_stripe_id'];
        let grandTotal = total['cart_grand_total'];
        let cardId = card['id'];
        cpyCheckoutParams['cart_grand_total'] = grandTotal;
        cpyCheckoutParams['user_stripe_id'] = stripId;
        cpyCheckoutParams['card_id'] = cardId;
        checkoutParamsAction(cpyCheckoutParams);
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
                                        {this.state['selectedCard'][card['id']] ?
                                            < Image
                                                source={require('../../../assets/app-images/img_tickbig.png')}
                                                style={
                                                    {
                                                        position: 'absolute',
                                                        height: ((SCREEN_HEIGHT * 13) / 100),
                                                        width: ((SCREEN_HEIGHT * 22) / 100),
                                                        alignSelf: 'center',
                                                        marginTop: "14%"
                                                    }
                                                }
                                            >
                                            </Image>
                                            :
                                            <View />
                                        }
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