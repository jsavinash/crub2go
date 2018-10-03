import * as React from "react";
import { View, Image } from "react-native";
import { styles } from './reset-card-field-style';
import { TextField } from 'react-native-material-textfield';
import { Images } from '@themes';
import { IResetPasswordState } from "@models";
export interface ResetCardFieldProps {
    resetParamsAction: (resetPassword: IResetPasswordState) => any,
    resetParams: IResetPasswordState
}
export interface ResetCardFieldState {
    isPassword: boolean,
    isCnfPassword: boolean,
}
export class ResetCardField extends React.Component<ResetCardFieldProps, ResetCardFieldState> {
    constructor(props: ResetCardFieldProps) {
        super(props);
        this.state = {
            isPassword: false,
            isCnfPassword: false
        };
    }
    private onPasswordChange = (password: string) => {
        const { resetParams, resetParamsAction } = this.props;
        const cpyResetParams = { ...resetParams };
        cpyResetParams['new_password'] = password;
        resetParamsAction(cpyResetParams)
    }
    private onConfirmPasswordChange = (cnfPassword: string) => {
        const { resetParams, resetParamsAction } = this.props;
        const cpyResetParams = { ...resetParams };
        cpyResetParams['cnf_password'] = cnfPassword;
        resetParamsAction(cpyResetParams)
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.txtField}>
                    <View style={styles.txtFieldIn}>
                        <TextField label='Password'
                            baseColor='#aaa'
                            textColor='black'
                            tintColor="#ACD472"
                            lineWidth={2}
                            animationDuration={60}
                            onFocus={() => {
                                this.setState({ isPassword: true });
                            }}
                            onBlur={() => {
                                this.setState({ isPassword: false });
                            }}
                            onChangeText={(pass: string) => this.onPasswordChange(pass)}
                        />
                        <Image
                            source={
                                this.state['isPassword'] ?
                                    Images['EYE_ACTIVE']
                                    :
                                    Images['EYE_INACTIVE']
                            }
                            style={styles.imageEye}
                        ></Image>
                    </View>
                </View>
                <View style={styles.txtField}>
                    <View style={styles.txtFieldIn}>
                        <TextField label='Confirm Password'
                            baseColor='#aaa'
                            textColor='black'
                            tintColor="#ACD472"
                            lineWidth={2}
                            animationDuration={60}
                            onFocus={() => {
                                this.setState({ isCnfPassword: true });
                            }}
                            onBlur={() => {
                                this.setState({ isCnfPassword: false });
                            }}
                            onChangeText={(cnfPass: string) => this.onConfirmPasswordChange(cnfPass)}
                        />
                        <Image
                            source={
                                this.state['isCnfPassword'] ?
                                    Images['EYE_ACTIVE']
                                    :
                                    Images['EYE_INACTIVE']
                            }
                            style={styles.imageEye}
                        ></Image>
                    </View>
                </View>
            </View>
        )
    }
}

