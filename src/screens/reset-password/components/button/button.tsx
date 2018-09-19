import * as React from "react";
import { TouchableOpacity } from "react-native";
import { styles } from './button-style';
import { Icon } from 'react-native-elements';
import { IResetPasswordState, IForgot } from '@models';
import { showAlert, logger } from '@common_service';
import { CustomerRestService } from '../../../../services';
import { transformToFromData, storeAsync } from "@common_service";
import {
    ErrTitle,
    ErrPasswordMsg,
    ErrCnfPasswordMsg,
    ErrPassMatch,
    ErrInternetCon,
    InternalServerErrorTitle,
    InternalServerError
} from '@constant';
export interface ButtonProps {
    resetParams: IResetPasswordState,
    navigation: any,
    resetParamsAction: (resetPassword: IResetPasswordState) => any
}
export const Button: React.StatelessComponent<ButtonProps> = (props) => {
    const submit = () => {
        const { new_password, cnf_password } = props['resetParams'];

        if (!new_password) {
            showAlert(ErrTitle, ErrPasswordMsg, 'danger');
            return;
        }
        if (!cnf_password) {
            showAlert(ErrTitle, ErrCnfPasswordMsg, 'danger');
            return;
        }
        if (!(new_password === cnf_password)) {
            showAlert(ErrTitle, ErrPassMatch, 'danger');
            return;
        }
        onPasswordReset(new_password);
    }
    const onPasswordReset = (password: string) => {
        const { navigation } = props;
        const { reset_key, mobile_number } = props['resetParams'];
        let forgot: IForgot = {
            new_password: password,
            mobile_number,
            reset_key
        };
        CustomerRestService.customerPassword(transformToFromData(forgot)).then((changePassSuccess: any) => {
            if (changePassSuccess.problem === "NETWORK_ERROR") {
                showAlert(ErrTitle, ErrInternetCon, 'info');
                return;
            }
            if (changePassSuccess['data']['settings']['success'] == 1) {
                navigation.navigate('Login', { screen: "ResetPassword" });
            } else if (changePassSuccess['data']['settings']['success'] == 0) {
                showAlert(ErrTitle, changePassSuccess['data']['settings']['message'], 'danger');
            }
        }).catch((error) => {
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
