import * as React from "react";
import { TouchableOpacity } from "react-native";
import { styles } from './button-style';
import { Icon } from 'react-native-elements';
import { IRegisterState, IVerification } from '@models';
import { showAlert, logger } from '@common_service';
import { CustomerRestService } from '../../../../services';
import { transformToFromData, storeAsync } from "@common_service";
import {
    ErrTitle,
    ErrMobileMsg,
    ErrPasswordMsg,
    ErrPolicyMsg,
    ErrNameMsg,
    ErrMobileValidMsg,
    ErrEmailMsg,
    ErrEmailValidMsg,
    ErrCnfPasswordMsg,
    ErrPassMatch,
    ErrInternetCon,
    InternalServerErrorTitle,
    InternalServerError
} from '@constant';
export interface ButtonProps {
    registerParams: IRegisterState,
    navigation: any,
    registerParamsAction: (register: IRegisterState) => any
}
export const Button: React.StatelessComponent<ButtonProps> = (props) => {
    const submit = () => {
        const { user_name, mobile_number, user_email, user_password, user_cnf_password } = props['registerParams'];
        if (!props['registerParams']['@@err']) {
            showAlert(ErrTitle, ErrPolicyMsg, 'danger');
            return;
        }
        if (!user_name) {
            showAlert(ErrTitle, ErrNameMsg, 'danger');
            return;
        }
        if (!mobile_number) {
            showAlert(ErrTitle, ErrMobileMsg, 'danger');
            return;
        } else if (!(/^[0-9]{10,13}$/.test(mobile_number))) {
            showAlert(ErrTitle, ErrMobileValidMsg, 'danger');
            return;
        }
        if (!user_email) {
            showAlert(ErrTitle, ErrEmailMsg, 'danger');
            return;
        } else if (!(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/.test(user_email))) {
            showAlert(ErrTitle, ErrEmailValidMsg, 'danger');
            return;
        }
        if (!user_password) {
            showAlert(ErrTitle, ErrPasswordMsg, 'danger');
            return;
        }
        if (!user_cnf_password) {
            showAlert(ErrTitle, ErrCnfPasswordMsg, 'danger');
            return;
        }
        if (!(user_password === user_cnf_password)) {
            showAlert(ErrTitle, ErrPassMatch, 'danger');
            return;
        }
        onVerification();
    }

    const onVerification = () => {
        const { mobile_number, user_email } = props['registerParams'];
        const { registerParams, registerParamsAction, navigation } = props;
        let verification: IVerification = {
            mobile_number,
            user_email
        };
        const cpyRegisterParams = registerParams;
        cpyRegisterParams['isLoading'] = true;
        registerParamsAction(cpyRegisterParams);
        CustomerRestService.customerVerification(transformToFromData(verification)).then((verifyUser: any) => {



            registerParamsAction(cpyRegisterParams);
            if (verifyUser.problem === "NETWORK_ERROR") {
                showAlert(ErrTitle, ErrInternetCon, 'info');
                setTimeout(() => {
                    const cpyRegisterParams = { ...registerParams };
                    cpyRegisterParams['isLoading'] = false;
                    registerParamsAction(cpyRegisterParams);
                }, 100);
                return;
            }
            if (verifyUser['data']['settings']['success'] == 1) {
                setTimeout(() => {
                    const cpyRegisterParams = { ...registerParams };
                    cpyRegisterParams['otp'] = verifyUser['data']['data']['otp'];
                    cpyRegisterParams['isLoading'] = false;
                    registerParamsAction(cpyRegisterParams);
                }, 100);
                navigation.navigate('Verification');
                showAlert('crub2go', 'OTP verification code is sent to mobile number you entered', 'success');
            } else if (verifyUser['data']['settings']['success'] == 0) {
                showAlert(ErrTitle, verifyUser['data']['settings']['message'], 'danger');
                setTimeout(() => {
                    const cpyRegisterParams = { ...registerParams };
                    cpyRegisterParams['isLoading'] = false;
                    registerParamsAction(cpyRegisterParams);
                }, 100);
            }
        }).catch((error) => {
            const cpyRegisterParams = { ...registerParams };
            cpyRegisterParams['isLoading'] = false;
            registerParamsAction(cpyRegisterParams);
            logger('Register', 'ERROR', error);
            showAlert(InternalServerErrorTitle, InternalServerError, 'warning');
        });
    }

    return (
        <TouchableOpacity
            style={styles.btnTch}
            onPress={() => {
                submit();
            }}>
            <Icon name={"chevron-right"} size={70} color="white" />
        </TouchableOpacity>
    )
}
