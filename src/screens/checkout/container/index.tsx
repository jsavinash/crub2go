import * as React from "react";
import { ScrollView } from "react-native";
import { Header, Promo, PickUp, Instruction, YourCart, Note, Total } from '../components';
import SplashScreen from 'react-native-splash-screen';
import { ICustomer } from '@models';
export interface CheckoutProps {
    navigation: any,
    customer: ICustomer
}

interface CheckoutState {

}
export class Checkout extends React.Component<CheckoutProps, CheckoutState> {
    constructor(props: CheckoutProps) {
        super(props)
    }
    componentDidMount() {
        SplashScreen.hide();
    }

    handlePress = () => {

    }
    render() {
        return (
            <ScrollView>
                <Header navigation={this.props.navigation} />
                <Promo navigation={this.props.navigation} />
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
