import * as React from "react";
import { ScrollView, View, StyleSheet, Image, Text } from "react-native";
import { ICustomerCard } from '@models';
import { CardRestService } from '../../../services';
import { transformToFromData } from "@common_service";
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
        this.getCard();
    }
    getCard = () => {
        let cardParams: ICustomerCard = {
            user_stripe_id: "cus_DWXvlTTqnUG6SW"
        };
        CardRestService.listCard(transformToFromData(cardParams)).then((success: any) => {
            if (success['data']['settings']['success'] == 1) {
                this.props.listCards(success['data']['data']);
            } else if (success['data']['settings']['success'] == 0) {
            }
            console.log("success", success);
        }).catch((error) => {

            console.log("error", error);





        })
    }
    render() {
        return (
            <ScrollView contentContainerStyle={styles.contentContainer}>
                {
                    this.props.cards.map((card: any, idx: number) => {
                        <View style={{
                            flex: 1
                        }}>
                            <Image
                                source={require('../../../assets/app-images/img_americanexp.png')}
                                style={{
                                    height: 200,
                                    width: 350,
                                    margin: 5,
                                    borderRadius: 20
                                }}>
                            </Image>
                            <Text style={{
                                position: 'absolute',
                                bottom: '30%',
                                left: '6%',
                                color: 'white',
                                fontSize: 26
                            }}>{card.brand}</Text>
                            <Text style={{
                                position: 'absolute',
                                bottom: '15%',
                                left: '6%',
                                color: 'white',
                                fontSize: 22,
                                width: '100%'
                            }}>**** **** **** {card.last4}</Text>
                        </View>

                    })
                }
                {/* //                    source={require('../../../assets/app-images/img_visa.png')}
                source={require('../../../assets/app-images/img_mastrcrd.png')} */}

            </ScrollView>
        )
    }
}


const styles = StyleSheet.create({
    contentContainer: {
        //   paddingVertical: 20
    }
})