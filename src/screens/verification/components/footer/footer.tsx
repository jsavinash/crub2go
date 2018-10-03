import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from './footer-style';
import { IRegisterState, IVerification } from "@models";
import { CustomerRestService } from '../../../../services';
import { transformToFromData, showAlert, logger } from "@common_service";
import {
    ErrTitle,
    ErrInternetCon,
    InternalServerErrorTitle,
    InternalServerError
} from "@constant";
export interface FooterProps {
    registerParams: IRegisterState,
    registerParamsAction: (register: IRegisterState) => any
}
export const Footer: React.StatelessComponent<FooterProps> = (props) => {
    const getNewOtp = () => {
        const { registerParamsAction, registerParams } = props;
        const { mobile_number, user_email, screen } = props.registerParams;
        if (screen != "Forgot") {
            let verification: IVerification = {
                mobile_number,
                user_email
            };
            const cpyRegisterParams = { ...registerParams };
            cpyRegisterParams['isLoading'] = true;
            registerParamsAction(cpyRegisterParams);
            CustomerRestService.customerVerification(transformToFromData(verification)).then((verificationSuccess: any) => {
                const cpyRegisterParams = { ...registerParams };
                cpyRegisterParams['isLoading'] = false;
                registerParamsAction(cpyRegisterParams);
                if (verificationSuccess.problem === "NETWORK_ERROR") {
                    showAlert(ErrTitle, ErrInternetCon, 'info');
                    return;
                }
                if (verificationSuccess['data']['settings']['success'] == 1) {
                    const cpyRegisterParams = { ...registerParams };
                    cpyRegisterParams['isLoading'] = false;
                    cpyRegisterParams['otp'] = verificationSuccess['data']['data']['otp'];
                    registerParamsAction(cpyRegisterParams);
                    showAlert('crub2go', 'OTP verification code is sent to mobile number you entered', 'success');
                } else if (verificationSuccess['data']['settings']['success'] == 0) {
                }
            }).catch((error) => {
                const cpyRegisterParams = { ...registerParams };
                cpyRegisterParams['isLoading'] = false;
                registerParamsAction(cpyRegisterParams);
                logger('Verification', 'ERROR', error);
                showAlert(InternalServerErrorTitle, InternalServerError, 'warning');
            })
        } else {
            const cpyRegisterParams = { ...registerParams };
            cpyRegisterParams['isLoading'] = true;
            registerParamsAction(cpyRegisterParams);
            CustomerRestService.customerForgot(transformToFromData({ mobile_number: registerParams['mobile_number'] })).then((forgotSuccess: any) => {
                const cpyRegisterParams = { ...registerParams };
                cpyRegisterParams['isLoading'] = false;
                registerParamsAction(cpyRegisterParams);
                if (forgotSuccess.problem === "NETWORK_ERROR") {
                    showAlert(ErrTitle, ErrInternetCon, 'info');
                    return;
                }
                if (forgotSuccess['data']['settings']['success'] == 1) {
                    const cpyRegisterParams = { ...registerParams };
                    cpyRegisterParams['isLoading'] = false;
                    cpyRegisterParams['otp'] = forgotSuccess['data']['data'][0]['otp'];
                    cpyRegisterParams['reset_key'] = forgotSuccess['data']['data'][0]['reset_key'];
                    registerParamsAction(cpyRegisterParams);
                    showAlert('crub2go', 'OTP verification code is sent to mobile number you entered', 'success');
                } else if (forgotSuccess['data']['settings']['success'] == 0) {
                }
            }).catch((error: any) => {
                const cpyRegisterParams = { ...registerParams };
                cpyRegisterParams['isLoading'] = false;
                registerParamsAction(cpyRegisterParams);
                logger('Verification', 'ERROR', error);
                showAlert(InternalServerErrorTitle, InternalServerError, 'warning');
            })
        }
    }

    return (

        <View
            style={styles.conatiner}>
            <View style={styles.div1}>
                <Text style={styles.txt1}>Didn't Receive The Verification Code ? </Text>
                <TouchableOpacity onPress={() => getNewOtp()}>
                    <Text style={styles.txt2}>Resend</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
