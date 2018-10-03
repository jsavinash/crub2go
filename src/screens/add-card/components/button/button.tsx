import * as React from "react";
import { Image, TouchableWithoutFeedback, View } from "react-native";
import { styles } from './button-style';
import { Icon } from 'react-native-elements';
import { IAddCardState, ICustomer } from '@models';
import { showAlert, logger } from '@common_service';
import { CardRestService } from '../../../../services';
import { transformToFromData, storeAsync } from "@common_service";
import { Images } from '@themes';
import stripe from 'tipsi-stripe';
import Dialog from "react-native-dialog";

stripe.setOptions({
    publishableKey: 'pk_test_GV81GpIug1kasx9zkCWMNl8L',
    androidPayMode: 'test', // Android only
})

import {
    ErrTitle,
    ErrPasswordMsg,
    ErrCnfPasswordMsg,
    ErrPassMatch
} from '@constant';
export interface ButtonProps {
    cardAddParams: IAddCardState,
    customer: ICustomer,
    navigation: any,
    cardAddParamsAction: (resetPassword: IAddCardState) => any
}
export interface State {
    onImage: boolean,
    dialogVisible: boolean
}
export class Button extends React.Component<ButtonProps, State> {
    constructor(props: ButtonProps) {
        super(props);
        this.state = {
            onImage: true,
            dialogVisible: false
        }
    }
    private showDialog = () => {
        this.setState({ dialogVisible: true });
        setTimeout(() => {
            this.setState({ dialogVisible: false });
            this.props.navigation.navigate('Login');
        }, 1000);


    }
    private submit = () => {
        const { cardAddParamsAction, cardAddParams } = this.props;
        const { user_access_token, user_stripe_id } = this.props['customer'];
        let expDate = this.props['cardAddParams']['expiryDate'];
        let split = expDate.split("/");
        let dateMonth = parseInt(split[0]);
        let dateYear = parseInt(split[1]);
        let data = {
            number: this.props['cardAddParams']['cardNumber'],
            expMonth: dateMonth,
            expYear: dateYear,
            cvc: this.props['cardAddParams']['cvv'],
            name: this.props['cardAddParams']['name'],
        };
        const cpyCardAddParams = { ...cardAddParams };
        cpyCardAddParams['isLoading'] = true;
        cardAddParamsAction(cpyCardAddParams);
        stripe.createTokenWithCard(data).then((card: any) => {
            console.log("card", card);
            const tokenId = card['tokenId'];
            let stripeParams = {
                user_stripe_id,
                stripe_token_id: tokenId
            }
            CardRestService.addCard(transformToFromData(stripeParams), user_access_token).then((addedCard: any) => {
                const cpyCardAddParams = { ...cardAddParams };
                cpyCardAddParams['isLoading'] = false;
                cardAddParamsAction(cpyCardAddParams);
                if (addedCard['data']['settings']['success'] == '1') {
                    showAlert('crub2go', addedCard['data']['settings']['message'], 'success');
                    this.props.navigation.goBack();
                } else if (addedCard['data']['settings']['success'] == '0') {
                    showAlert('crub2go', addedCard['data']['settings']['message'], 'danger');
                }
                else if (addedCard['data']['settings']['success'] == '401') {
                    this.showDialog();
                }
            }).catch((error) => {
                console.log("addedCard error", error);
            })
        }).catch((error: any) => {
            const cpyCardAddParams = { ...cardAddParams };
            cpyCardAddParams['isLoading'] = false;
            cardAddParamsAction(cpyCardAddParams);
            showAlert('crub2go', `${error}`, 'danger');
        })
        //  this.onPasswordReset(new_password);
    }
    // private onAddCard = (password: string) => {
    //     const { navigation } = this.props;
    //     const { name, cardNumber, expiryDate, cvv } = this.props['cardAddParams'];
    //     let forgot: IForgot = {
    //         new_password: password,
    //         mobile_number,
    //         reset_key
    //     };
    //     CustomerRestService.customerPassword(transformToFromData(forgot)).then((changePassSuccess: any) => {
    //         if (changePassSuccess.problem === "NETWORK_ERROR") {
    //             showAlert(ErrTitle, ErrInternetCon, 'info');
    //             return;
    //         }
    //         if (changePassSuccess['data']['settings']['success'] == 1) {
    //             navigation.navigate('Login', { screen: "ResetPassword" });
    //         } else if (changePassSuccess['data']['settings']['success'] == 0) {
    //             showAlert(ErrTitle, changePassSuccess['data']['settings']['message'], 'danger');
    //         }
    //     }).catch((error) => {
    //         logger('Register', 'ERROR', error);
    //         showAlert(InternalServerErrorTitle, InternalServerError, 'warning');
    //     });
    // }
    render() {
        return (
            <View style={styles.container} >
                <TouchableWithoutFeedback
                    onPressIn={() => {
                        const { onImage } = this.state;
                        this.setState({ onImage: !onImage });
                    }}
                    onPressOut={() => {
                        const { onImage } = this.state;
                        this.setState({ onImage: !onImage });
                    }}
                    onPress={() => {
                        this.submit();
                    }}>
                    <Image
                        source={this.state.onImage ? Images.ADD_BUTTON : Images.ADD_BUTTON_DARK}
                        style={styles.image}>
                    </Image>
                </TouchableWithoutFeedback >
                <Dialog.Container visible={this.state.dialogVisible}>
                    <Dialog.Title>curb2go</Dialog.Title>
                    <Dialog.Description>
                        Multiple login from different devices.
               </Dialog.Description>
                </Dialog.Container>
            </View>
        )
    }
}
