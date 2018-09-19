import * as React from "react";
import { TouchableOpacity } from "react-native";
import { styles } from './button-style';
import { Icon } from 'react-native-elements';
import { IRegister, ICustomer } from '@models';
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
    registerParams: IRegister,
    navigation: any,
    registerParamsAction: (register: IRegister) => any,
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
        const register: IRegister = {
            user_name: registerParams['user_name'],
            user_password: registerParams['user_password'],
            user_email: registerParams['user_email'],
            mobile_number: registerParams['mobile_number'],
            '@@err': registerParams['@@err'],
            photo: registerParams['photo']
        };
        let data: any = transformToFromData(register);
        if (registerParams['photo'] && registerParams['photo'].uri) {
            data.append('user_profile', {
                uri: registerParams['photo']['uri'],
                type: registerParams['photo']['type'],
                name: registerParams['photo']['fileName']
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
                storeAsync('user', customerData);
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
