import * as React from "react";
import { Image, Dimensions, TouchableWithoutFeedback, View } from "react-native";
import { styles } from './button-style';
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
import { Images } from '@themes';
const SCREEN_HEIGHT = Dimensions.get('window').width;

export interface ButtonProps {
    loginParams: ILoginState,
    navigation: any,
    createCustomerAction: (customer: ICustomer) => any,
    loginParamsAction: (login: ILoginState) => any
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
        const { user_name, user_password } = this.props['loginParams'];
        if (!user_name) {
            showAlert(ErrTitle, ErrMobileOrEmailMsg, 'danger');
            return;
        }
        if (!user_password) {
            showAlert(ErrTitle, ErrPasswordMsg, 'danger');
            return;
        }
        this.customerLogin(this.props['loginParams']);
    }

    private customerLogin = (login: ILoginState) => {
        const { createCustomerAction, navigation, loginParams, loginParamsAction } = this.props;
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
