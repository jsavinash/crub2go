import * as React from "react";
import { Image, Dimensions, TouchableWithoutFeedback, View } from "react-native";
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
import { Images } from '@themes';

export interface ButtonProps {
    registerParams: IRegisterState,
    navigation: any,
    registerParamsAction: (register: IRegisterState) => any,
    createCustomerAction: (customer: ICustomer) => any
}
export interface State {
    onImage: boolean
}
export class Button extends React.Component<ButtonProps, State> {
    constructor(props: ButtonProps) {
        super(props);
        this.state = {
            onImage: true
        }
    }
    
    private submit = () => {
        this.onRegister();
    }
    private onRegister = () => {
        const { registerParams,
            createCustomerAction,
            registerParamsAction,
            navigation } = this.props;

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
                    type: "image/jpeg",
                    name: registerParams['user_profile']['name']
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
            this.props.navigation.navigate('ResetPassword', { reset_key: registerParams['reset_key'], mobile_number: registerParams['mobile_number'] });
        }
    }
    render() {

        return (
            <View style={styles.container}>
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
                        source={this.state.onImage ? Images.LIGHT_RIGHT_SWIPE : Images.DARK_RIGHT_SWIPE}
                        style={styles.image}>
                    </Image>
                </TouchableWithoutFeedback >
            </View>
        )
    }
}
