import * as React from "react";
import { Image, TouchableWithoutFeedback, View } from "react-native";
import { styles } from './button-style';
import { IForgotPasswordState } from '@models';
import { showAlert, logger } from '@common_service';
import { CustomerRestService } from '../../../../services';
import { transformToFromData } from "@common_service";
import {
    ErrTitle,
    ErrMobileValidMsg,
    ErrMobileMsg,
    ErrInternetCon,
    InternalServerErrorTitle,
    InternalServerError
} from '@constant';
import { Images } from '@themes';

export interface ButtonProps {
    navigation: any,
    forgotParamsAction: (forgotPassword: IForgotPasswordState) => any,
    forgotParams: IForgotPasswordState
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
        const _self = this;
        const { mobile_number } = _self.props['forgotParams'];
        if (!mobile_number) {
            showAlert(ErrTitle, ErrMobileMsg, 'danger');
            return;
        } else if (!(/^[0-9]{10,13}$/.test(mobile_number))) {
            showAlert(ErrTitle, ErrMobileValidMsg, 'danger');
            return;
        }
        _self.onForgotPassword(mobile_number);
    }

    onForgotPassword = (mobileNumber: any) => {
        const _self = this;
        const { forgotParams, forgotParamsAction } = _self.props;
        const data = {
            mobile_number: mobileNumber,
        }
        const cpyForgotParams = { ...forgotParams };
        cpyForgotParams['isLoading'] = true;
        forgotParamsAction(cpyForgotParams);
        CustomerRestService.customerForgot(transformToFromData(data)).then((forgotUser: any) => {
            const cpyForgotParams = { ...forgotParams };
            cpyForgotParams['isLoading'] = false;
            forgotParamsAction(cpyForgotParams);
            if (forgotUser.problem === "NETWORK_ERROR") {
                showAlert(ErrTitle, ErrInternetCon, 'info');
                return;
            }
            if (forgotUser['data']['settings']['success'] == 1) {
                let otp = forgotUser['data']['data'][0]['otp'];
                let reset_key = forgotUser['data']['data'][0]['reset_key'];
                _self.props.navigation.navigate('Verification', { otp, screen: 'Forgot', mobile: mobileNumber, reset_key });
            } else if (forgotUser['data']['settings']['success'] == 0) {
                showAlert(ErrTitle, forgotUser['data']['settings']['message'], 'danger');
            }
        }).catch((error) => {
            const cpyForgotParams = { ...forgotParams };
            cpyForgotParams['isLoading'] = false;
            forgotParamsAction(cpyForgotParams);
            logger('Register', 'ERROR', error);
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
