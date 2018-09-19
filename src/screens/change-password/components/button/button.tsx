import * as React from "react";
import { TouchableOpacity } from "react-native";
import { styles } from './button-style';
import { Icon } from 'react-native-elements';
import { ILoginState, ICustomer, IChangePasswordState, IChangePass } from '@models';
import { showAlert, logger } from '@common_service';
import { CustomerRestService } from '../../../../services';
import { transformToFromData, storeAsync } from "@common_service";
import {
    ErrTitle,
    ErrOldPass,
    ErrPasswordMsg,
    ErrCnfPasswordMsg,
    ErrPassMatch,
    ErrInternetCon,
    InternalServerErrorTitle,
    InternalServerError
} from '@constant';
export interface ButtonProps {
    changePasswordParams: IChangePasswordState,
    navigation: any,
    token: string,
    createCustomerAction: (customer: ICustomer) => any,
    changePasswordParamsAction: (changePassword: IChangePasswordState) => any
}
export const Button: React.StatelessComponent<ButtonProps> = (props) => {

    const submit = () => {
        const { old_password, new_password, cnf_password } = props['changePasswordParams'];

        if (!old_password) {
            showAlert(ErrTitle, ErrOldPass, 'danger');
            return;
        }
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
        delete props['changePasswordParams']['cnf_password'];
        onChangePassword(props['changePasswordParams']);
    }
    const onChangePassword = (change: IChangePass) => {
        const { navigation, token, changePasswordParams, changePasswordParamsAction } = props;
        const cpyChangePasswordParams = { ...changePasswordParams };
        cpyChangePasswordParams['isLoading'] = true;
        changePasswordParamsAction(cpyChangePasswordParams);
        CustomerRestService.customerPasswordChange(transformToFromData(change), token).then((forgotUser: any) => {
            const cpyChangePasswordParams = { ...changePasswordParams };
            cpyChangePasswordParams['isLoading'] = false;
            changePasswordParamsAction(cpyChangePasswordParams);
            if (forgotUser.problem === "NETWORK_ERROR") {
                showAlert(ErrTitle, ErrInternetCon, 'info');
                return;
            }
            if (forgotUser['data']['settings']['success'] == 1) {
                navigation.navigate('Home');
            } else if (forgotUser['data']['settings']['success'] == 401) {
                showAlert(ErrTitle, forgotUser['data']['settings']['message'], 'danger');
                navigation.navigate('Home');
            }
        }).catch((error: any) => {
            const cpyChangePasswordParams = { ...changePasswordParams };
            cpyChangePasswordParams['isLoading'] = false;
            changePasswordParamsAction(cpyChangePasswordParams);
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
