import * as React from "react"
import { View, Image } from "react-native"
import { TextField } from 'react-native-material-textfield';
import { styles } from './chang-password-card-field-style';
import { Images } from "@themes";
import { IChangePasswordState } from "@models";
export interface ChangePasswordCardFieldProps {
    changePasswordParamsAction: (changepassword: IChangePasswordState) => any,
    changePasswordParams: IChangePasswordState
}
interface ChangePasswordCardFieldState {
    isOldPassword: boolean,
    isNewPassword: boolean,
    isCnfPassword: boolean
}
export class ChangePasswordCardField extends React.Component<ChangePasswordCardFieldProps, ChangePasswordCardFieldState> {
    constructor(props: ChangePasswordCardFieldProps) {
        super(props);
        this.state = {
            isOldPassword: false,
            isNewPassword: false,
            isCnfPassword: false
        };
    }
    
    private onOldPasswordChange = (oldPassword: string) => {
        const { changePasswordParams, changePasswordParamsAction } = this.props;
        const cpyChangePasswordParams = { ...changePasswordParams };
        cpyChangePasswordParams['old_password'] = oldPassword;
        changePasswordParamsAction(cpyChangePasswordParams)
    }

    private onNewPasswordChange = (newPassword: string) => {
        const { changePasswordParams, changePasswordParamsAction } = this.props;
        const cpyChangePasswordParams = { ...changePasswordParams };
        cpyChangePasswordParams['new_password'] = newPassword;
        changePasswordParamsAction(cpyChangePasswordParams)
    }
    private onCnfPasswordChange = (confPassword: string) => {
        const { changePasswordParams, changePasswordParamsAction } = this.props;
        const cpyChangePasswordParams = { ...changePasswordParams };
        cpyChangePasswordParams['cnf_password'] = confPassword;
        changePasswordParamsAction(cpyChangePasswordParams)
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.txtField}>
                    <View style={styles.txtFieldIn}>
                        <TextField label='Old Password'
                            baseColor='#aaa'
                            textColor='black'
                            tintColor="#ACD472"
                            lineWidth={2}
                            animationDuration={60}
                            secureTextEntry={true}
                            onFocus={() => {
                                this.setState({ isOldPassword: true });
                            }}
                            onBlur={() => {
                                this.setState({ isOldPassword: false });
                            }}
                            onChangeText={(oldPass: string) => this.onOldPasswordChange(oldPass)} />
                        <Image
                            source={
                                this.state['isOldPassword'] ?
                                    Images['EYE_ACTIVE']
                                    :
                                    Images['EYE_INACTIVE']
                            }
                            style={styles.imageEye}></Image>
                    </View>
                </View>
                <View style={styles.txtField}>
                    <View style={styles.txtFieldIn}>
                        <TextField label='New Password'
                            baseColor='#aaa'
                            textColor='black'
                            tintColor="#ACD472"
                            lineWidth={2}
                            secureTextEntry={true}
                            animationDuration={60}
                            onFocus={() => {
                                this.setState({ isNewPassword: true });
                            }}
                            onBlur={() => {
                                this.setState({ isNewPassword: false });
                            }}
                            onChangeText={(newPass: string) => this.onNewPasswordChange(newPass)} />

                        <Image
                            source={
                                this.state['isNewPassword'] ?
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
                            secureTextEntry={true}
                            animationDuration={60}
                            onFocus={() => {
                                this.setState({ isCnfPassword: true });
                            }}
                            onBlur={() => {
                                this.setState({ isCnfPassword: false });
                            }}
                            onChangeText={(cnfPass: string) => this.onCnfPasswordChange(cnfPass)} />
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
