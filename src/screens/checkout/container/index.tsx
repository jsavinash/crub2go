import * as React from "react";
import { ScrollView } from "react-native";
import { Header, Promo, PickUp, Instruction, YourCart, Note, Total } from '../components';
import SplashScreen from 'react-native-splash-screen';
import { ICustomer } from '@models';
import { ICartResponse, ICartTotal } from '@models';

export interface CheckoutProps {
    navigation: any,
    customer: ICustomer,
    cart: ICartResponse[],
    cartTotal: ICartTotal,
}

interface CheckoutState {

}
export class Checkout extends React.Component<CheckoutProps, CheckoutState> {
  private resturantId: string;
    constructor(props: CheckoutProps) {
        super(props)
    }
    componentDidMount() {
        SplashScreen.hide();
        this.getRouteParams();
    }
    getRouteParams = () => {
        const { navigation } = this.props;
        this.resturantId = navigation.getParam('resturantId', '');
    }

    handlePress = () => {

    }
    render() {
        return (
            <ScrollView>
                <Header/>
                <Promo/>
                <Instruction instructions={'Pickup Details'} />
                <PickUp />
                <Instruction instructions={'Your Cart'} />
                <YourCart />
                <Instruction instructions={'Notes'} />
                <Note />
                <Total />
            </ScrollView>
        )
    }
}
