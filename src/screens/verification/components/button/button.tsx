import * as React from "react";
import { TouchableOpacity } from "react-native";
import { styles } from './button-style';
import { Icon } from 'react-native-elements';
import { IRegister, IVerification } from '@models';
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
    registerParams: IRegister,
    navigation: any,
    registerParamsAction: (customer: IRegister) => any
}
export const Button: React.StatelessComponent<ButtonProps> = (props) => {
    const submit = () => {
        onRegister();
    }
    const onRegister = () => {
        const { mobile_number, user_email } = props['registerParams'];
        const { registerParams, registerParamsAction, navigation } = props;
        const cpyRegisterParams = registerParams;
        let verification: IVerification = {
            mobile_number,
            user_email
        };
        cpyRegisterParams['isLoading'] = true;
        registerParamsAction(cpyRegisterParams);
        CustomerRestService.customerVerification(transformToFromData(verification)).then((verifyUser: any) => {
            const cpyRegisterParams = { ...registerParams };
            cpyRegisterParams['isLoading'] = false;
            registerParamsAction(cpyRegisterParams);
            if (verifyUser.problem === "NETWORK_ERROR") {
                showAlert(ErrTitle, ErrInternetCon, 'info');
                return;
            }
            if (verifyUser['data']['settings']['success'] == 1) {
                cpyRegisterParams['otp'] = verifyUser['data']['data']['otp'];
                registerParamsAction(cpyRegisterParams);
                navigation.navigate('Verification');
            } else if (verifyUser['data']['settings']['success'] == 0) {
                showAlert(ErrTitle, verifyUser['data']['settings']['message'], 'danger');
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
