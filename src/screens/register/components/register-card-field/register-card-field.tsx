import * as React from "react"
import { View, Image } from "react-native";
import { styles } from './register-card-field-style';
import { TextField } from 'react-native-material-textfield';
import { IRegisterState } from "@models";
import { Images } from '@themes';

export interface RegisterCardFieldProps {
    registerParamsAction: (register: IRegisterState) => any,
    registerParams: IRegisterState
}
interface RegisterCardFieldState {
    isName: boolean,
    isMobile: boolean,
    isEmail: boolean,
    isPassword: boolean,
    isCnfPassword: boolean
}
export class RegisterCardField extends React.Component<RegisterCardFieldProps, RegisterCardFieldState> {
    constructor(props: RegisterCardFieldProps) {
        super(props);
        this.state =
            {
                isName: false,
                isMobile: false,
                isEmail: false,
                isPassword: false,
                isCnfPassword: false
            };
    }
    
    private onNameChange = (name: string) => {
        const { registerParams, registerParamsAction } = this.props;
        const cpyRegisterParams = { ...registerParams };
        cpyRegisterParams['user_name'] = name;
        registerParamsAction(cpyRegisterParams)
    }
    private onMobileChange = (userId: string) => {
        const { registerParams, registerParamsAction } = this.props;
        const cpyRegisterParams = { ...registerParams };
        cpyRegisterParams['mobile_number'] = userId;
        registerParamsAction(cpyRegisterParams)
    }
    private onEmailChange = (email: string) => {
        const { registerParams, registerParamsAction } = this.props;
        const cpyRegisterParams = { ...registerParams };
        cpyRegisterParams['user_email'] = email;
        registerParamsAction(cpyRegisterParams)
    }
    private onPasswordChange = (password: string) => {
        const { registerParams, registerParamsAction } = this.props;
        const cpyRegisterParams = { ...registerParams };
        cpyRegisterParams['user_password'] = password;
        registerParamsAction(cpyRegisterParams)
    }
    private onConfirmPasswordChange = (confirmPassword: string) => {
        const { registerParams, registerParamsAction } = this.props;
        const cpyRegisterParams = { ...registerParams };
        cpyRegisterParams['user_cnf_password'] = confirmPassword;
        registerParamsAction(cpyRegisterParams)
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.txtField}>
                    <View style={styles.txtFieldIn}>
                        <TextField label='Name'
                            baseColor='#aaa'
                            textColor='black'
                            tintColor="#ACD472"
                            lineWidth={2}
                            animationDuration={60}
                            onFocus={() => {
                                this.setState({ isName: true });
                            }}
                            onBlur={() => {
                                this.setState({ isName: false });
                            }}
                            onChangeText={(name: string) => this.onNameChange(name)}
                        />
                        <Image
                            source={
                                this.state['isName'] ?
                                    Images['USER_ACTIVE']
                                    :
                                    Images['USER_INACTIVE']
                            }
                            style={styles.image}
                        ></Image>
                    </View>
                </View>
                <View style={styles.txtField}>
                    <View style={styles.txtFieldIn}>
                        <TextField label='Mobile'
                            baseColor='#aaa'
                            textColor='black'
                            tintColor="#ACD472"
                            lineWidth={2}
                            keyboardType={'numeric'}
                            animationDuration={60}
                            onFocus={() => {
                                this.setState({ isMobile: true });
                            }}
                            onBlur={() => {
                                this.setState({ isMobile: false });
                            }}
                            onChangeText={(mobile: string) => this.onMobileChange(mobile)}

                        />
                        <Image
                            source={
                                this.state['isMobile'] ?
                                    Images['MOBILE_ACTIVE']
                                    :
                                    Images['MOBILE_INACTIVE']
                            }
                            style={styles.image}
                        ></Image>
                    </View>
                </View>
                <View style={styles.txtField}>
                    <View style={styles.txtFieldIn}>
                        <TextField label='Email Address'
                            baseColor='#aaa'
                            textColor='black'
                            tintColor="#ACD472"
                            lineWidth={2}
                            animationDuration={60}
                            onFocus={() => {
                                this.setState({ isEmail: true });
                            }}
                            onBlur={() => {
                                this.setState({ isEmail: false });
                            }}
                            onChangeText={(email: string) => this.onEmailChange(email)}
                        />
                        <Image
                            source={
                                this.state['isEmail'] ?
                                    Images['EMAIL_ACTIVE']
                                    :
                                    Images['EMAIL_DEACTIVE']
                            }
                            style={styles.image}
                        ></Image>
                    </View>
                </View>

                <View style={styles.txtField}>
                    <View style={styles.txtFieldIn}>
                        <TextField label='Password'
                            baseColor='#aaa'
                            textColor='black'
                            tintColor="#ACD472"
                            secureTextEntry={true}
                            lineWidth={2}
                            animationDuration={60}
                            onFocus={() => {
                                this.setState({ isPassword: true });
                            }}
                            onBlur={() => {
                                this.setState({ isPassword: false });
                            }}
                            onChangeText={(password: string) => this.onPasswordChange(password)}
                        />
                        <Image
                            source={
                                this.state.isPassword ?
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
                            secureTextEntry={true}
                            onFocus={() => {
                                this.setState({ isCnfPassword: true });
                            }}
                            onBlur={() => {
                                this.setState({ isCnfPassword: false });
                            }}
                            onChangeText={(password: string) => this.onConfirmPasswordChange(password)}
                        />
                        <Image
                            source={
                                this.state.isCnfPassword ?
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

