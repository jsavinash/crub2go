import * as React from "react";
import { Image, TouchableWithoutFeedback, View } from "react-native";
import { styles } from './button-style';
import { Icon } from 'react-native-elements';
import { IResetPasswordState, IForgot } from '@models';
import { showAlert, logger } from '@common_service';
import { CustomerRestService } from '../../../../services';
import { transformToFromData, storeAsync } from "@common_service";
import { Images } from '@themes';

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
        const { new_password, cnf_password } = this.props['resetParams'];

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
        this.onPasswordReset(new_password);
    }
    private onPasswordReset = (password: string) => {
        const { navigation } = this.props;
        const { reset_key, mobile_number } = this.props['resetParams'];
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
    render() {
        return (
            <View style={styles.container} >
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
                        source={this.state.onImage ? Images.ADD_BUTTON : Images.ADD_BUTTON_DARK}
                        style={styles.image}>
                    </Image>
                </TouchableWithoutFeedback >
            </View>
        )
    }
}
