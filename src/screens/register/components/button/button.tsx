import * as React from "react";
import { TouchableOpacity } from "react-native";
import { styles } from './button-style';
import { Icon } from 'react-native-elements';
import { ILogin, ICustomer } from '@models';
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
    loginParams: ILogin,
    navigation: any,
    createCustomerAction: (customer: ICustomer) => any,
    loginParamsAction: (login: ILogin) => any
}
export const Button: React.StatelessComponent<ButtonProps> = (props) => {



    // componentWillReceiveProps(nextProps: any) {
    //     const { name, mobile, email, pass, cnfPass } = this.state;
    //     if (nextProps.isFieldDataFetch) {
    //         if (!name) {
    //             showAlert(ErrTitle, ErrNameMsg, 'danger');
    //             this.passDataToCard(false);
    //             return;
    //         }
    //         console.log('mobile', mobile);
    //         if (!mobile) {
    //             showAlert(ErrTitle, ErrMobileMsg, 'danger');
    //             this.passDataToCard(false);
    //             return;
    //         } else if (!(/^[0-9]{10,13}$/.test(mobile))) {
    //             showAlert(ErrTitle, ErrMobileValidMsg, 'danger');
    //             this.passDataToCard(false);
    //             return;
    //         }
    //         if (!email) {
    //             showAlert(ErrTitle, ErrEmailMsg, 'danger');
    //             this.passDataToCard(false);
    //             return;
    //         } else if (!(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/.test(email))) {
    //             showAlert(ErrTitle, ErrEmailValidMsg, 'danger');
    //             this.passDataToCard(false);
    //             return;
    //         }
    //         if (!pass) {
    //             showAlert(ErrTitle, ErrPasswordMsg, 'danger');
    //             this.passDataToCard(false);
    //             return;
    //         }
    //         if (!cnfPass) {
    //             showAlert(ErrTitle, ErrCnfPasswordMsg, 'danger');
    //             this.passDataToCard(false);
    //             return;
    //         }
    //         if (!(pass === cnfPass)) {
    //             showAlert(ErrTitle, ErrPassMatch, 'danger');
    //             this.passDataToCard(false);
    //             return;
    //         }
    //         this.passDataToCard(true);
    //     }
    // }
     
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

    const customerLogin = (customer: ILogin) => {
        const { createCustomerAction, navigation, loginParams, loginParamsAction } = props;
        const cpyLoginParams = { ...loginParams };
        cpyLoginParams['isLoading'] = true;
        loginParamsAction(cpyLoginParams);
        CustomerRestService.customerLogin(transformToFromData(customer)).then((success: any) => {
            const cpyLoginParams = { ...loginParams };
            cpyLoginParams['isLoading'] = false;
            loginParamsAction(cpyLoginParams);
            if (success.problem === "NETWORK_ERROR") {
                showAlert(ErrTitle, ErrInternetCon, 'info');
                return;
            }
            if (success['data']['settings']['success'] == 1) {
                let customerData: ICustomer = success['data']['data'][0];
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
