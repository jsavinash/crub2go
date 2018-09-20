import * as React from "react";
import { TouchableOpacity } from "react-native";
import { styles } from './button-style';
import { Icon } from 'react-native-elements';
import { IRegisterState, ICustomer, IRegister } from '@models';
import { showAlert, logger } from '@common_service';
import { CustomerRestService } from '../../../../services';
import { transformToFromData, storeAsync } from "@common_service";
import {
    ErrTitle,
    ErrInternetCon,
    InternalServerErrorTitle,
    InternalServerError
} from '@constant';
export interface ButtonProps {
    registerParams: IRegisterState,
    navigation: any,
    registerParamsAction: (register: IRegisterState) => any,
    createCustomerAction: (customer: ICustomer) => any
}
export const Button: React.StatelessComponent<ButtonProps> = (props) => {
    const submit = () => {
        onRegister();
    }
    const onRegister = () => {
        const { registerParams,
            createCustomerAction,
            registerParamsAction,
            navigation } = props;

        if (!(registerParams['screen'] === "Forgot")) {
            const register: IRegister = {
                user_name: registerParams['user_name'],
                user_password: registerParams['user_password'],
                user_email: registerParams['user_email'],
                mobile_number: registerParams['mobile_number'],
                '@@err': registerParams['@@err'],
                photo: registerParams['photo']
            };
            let data: any = transformToFromData(register);
            if (registerParams['user_profile'] && registerParams['user_profile'].uri) {
                data.append('user_profile', {
                    uri: registerParams['user_profile']['uri'],
                    type: registerParams['user_profile']['type'],
                    name: registerParams['user_profile']['fileName']
                });
            }

            const cpyRegisterParams = { ...registerParams };
            cpyRegisterParams['isLoading'] = true;
            registerParamsAction(cpyRegisterParams);
            CustomerRestService.customerRegister(data).then((registerSuccess: any) => {
                const cpyRegisterParams = { ...registerParams };
                cpyRegisterParams['isLoading'] = false;
                registerParamsAction(cpyRegisterParams);
                if (registerSuccess.problem === "NETWORK_ERROR") {
                    showAlert(ErrTitle, ErrInternetCon, 'info');
                    return;
                }
                if (registerSuccess['data']['settings']['success'] == 1) {
                    let customerData: ICustomer = registerSuccess['data']['data'][0];
                    storeAsync('user', JSON.stringify(customerData));
                    createCustomerAction(customerData);
                    navigation.navigate('Home');
                } else if (registerSuccess['data']['settings']['success'] == 0) {
                    showAlert(ErrTitle, registerSuccess['data']['settings']['success']['message'], 'danger');
                }
            }).catch((error) => {
                const cpyRegisterParams = { ...registerParams };
                cpyRegisterParams['isLoading'] = false;
                registerParamsAction(cpyRegisterParams);
                logger('Verification', 'ERROR', error);
                showAlert(InternalServerErrorTitle, InternalServerError, 'warning');
            })
        } else {
            props.navigation.navigate('ResetPassword', { reset_key: registerParams['reset_key'], mobile_number: registerParams['mobile_number'] });
        }
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
