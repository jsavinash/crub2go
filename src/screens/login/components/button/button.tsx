import * as React from "react";
import { TouchableOpacity } from "react-native";
import { styles } from './button-style';
import { Icon } from 'react-native-elements';
import { ILoginState, ICustomer } from '@models';
import { showAlert, logger } from '@common_service';
import { CustomerRestService } from '../../../../services';
import { transformToFromData, storeAsync } from "@common_service";
import {
    ErrTitle,
    ErrMobileOrEmailMsg,
    ErrPasswordMsg,
    ErrInternetCon,
    LoginErrorMessage,
    InternalServerErrorTitle,
    InternalServerError
} from '@constant';
export interface ButtonProps {
    loginParams: ILoginState,
    navigation: any,
    createCustomerAction: (customer: ICustomer) => any,
    loginParamsAction: (login: ILoginState) => any
}
export const Button: React.StatelessComponent<ButtonProps> = (props) => {

    const submit = () => {
        const { user_name, user_password } = props.loginParams;
        if (!user_name) {
            showAlert(ErrTitle, ErrMobileOrEmailMsg, 'danger');
            return;
        }
        if (!user_password) {
            showAlert(ErrTitle, ErrPasswordMsg, 'danger');
            return;
        }
        customerLogin(props['loginParams']);
    }

    const customerLogin = (login: ILoginState) => {
        const { createCustomerAction, navigation, loginParams, loginParamsAction } = props;
        const cpyLoginParams = { ...loginParams };
        cpyLoginParams['isLoading'] = true;
        loginParamsAction(cpyLoginParams);
        CustomerRestService.customerLogin(transformToFromData(login)).then((success: any) => {
            const cpyLoginParams = { ...loginParams };
            cpyLoginParams['isLoading'] = false;
            loginParamsAction(cpyLoginParams);
            if (success.problem === "NETWORK_ERROR") {
                showAlert(ErrTitle, ErrInternetCon, 'info');
                return;
            }
            if (success['data']['settings']['success'] == 1) {
                let customerData: ICustomer = success['data']['data'][0];
               
                console.log("JSON.stringify(customerData)", JSON.stringify(customerData));

                storeAsync('user', JSON.stringify(customerData));
                createCustomerAction(customerData);
                navigation.navigate('Home');
            } else if (success['data']['settings']['success'] == 0) {
                showAlert(ErrTitle, LoginErrorMessage, 'danger');
            }
        }).catch((error) => {
            const cpyLoginParams = { ...loginParams };
            cpyLoginParams['isLoading'] = false;
            loginParamsAction(cpyLoginParams);
            logger('Login', 'ERROR', error);
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
