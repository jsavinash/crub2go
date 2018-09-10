import * as React from "react";
import { ScrollView, View, StyleSheet, Image, Text } from "react-native";
import { ICustomerCard } from '@models';
import { CardRestService } from '../../../services';
import { transformToFromData } from "@common_service";
import SplashScreen from 'react-native-splash-screen';
import FAB from 'react-native-fab';
import Icon from 'react-native-vector-icons/FontAwesome';

export interface PaymentProps {
    cards: any,
    listCards: (data: any[]) => any
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
        let cardParams: ICustomerCard = {
            user_stripe_id: "cus_DWXvlTTqnUG6SW"
        };
        CardRestService.listCard(transformToFromData(cardParams)).then((success: any) => {
            if (success['data']['settings']['success'] == 1) {
                this.props.listCards(success['data']['data'][0]['customer_cards']);
            } else if (success['data']['settings']['success'] == 0) {
            }
            console.log("success", success);
        }).catch((error) => {
            console.log("error", error);
        })
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
                                <View style={{
                                    flex: 1
                                }} key={idx}>
                                    {CardName}
                                    <Text style={styles.txt}>{card.brand}</Text>
                                    <Text style={styles.txt2}>**** **** **** {card.last4}</Text>
                                </View>
                            )
                        })
                    }
                </ScrollView>
                <FAB buttonColor="red" iconTextColor="#FFFFFF" onClickAction={() => { console.log("FAB pressed") }} visible={true} iconTextComponent={<Icon name="plus" />} />
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