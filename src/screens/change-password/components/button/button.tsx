import * as React from "react";
import { Image, TouchableWithoutFeedback, View } from "react-native";
import { styles } from './button-style';
import { Images } from '@themes';
import { ICustomer, IChangePasswordState, IChangePass } from '@models';
import { showAlert, logger } from '@common_service';
import { CustomerRestService } from '../../../../services';
import { transformToFromData } from "@common_service";
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
        const { old_password, new_password, cnf_password } = this.props['changePasswordParams'];

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
        delete this.props['changePasswordParams']['cnf_password'];
        this.onChangePassword(this.props['changePasswordParams']);
    }
    private onChangePassword = (change: IChangePass) => {
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
