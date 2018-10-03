import * as React from "react";
import { View, Image } from "react-native";
import { TextField } from "react-native-material-textfield";
import { Images } from "@themes";
import { styles } from "./login-card-field-style";
import { ILoginState } from "@models";

export interface LoginCardFieldProps {
    loginParamsAction: (login: ILoginState) => any,
    loginParams: ILoginState
}

interface LoginCardFieldState {
    isUserId: boolean,
    isPassword: boolean
}

export class LoginCardField extends React.Component<LoginCardFieldProps, LoginCardFieldState> {
    secondField: any;
    constructor(props: LoginCardFieldProps) {
        super(props);
        this.state = {
            isUserId: false,
            isPassword: false,
        };
        this.secondField = React.createRef();
    }
    private onUserIdChange = (userId: string) => {
        const { loginParams, loginParamsAction } = this.props;
        const cpyLoginParams = { ...loginParams };
        cpyLoginParams['user_name'] = userId;
        loginParamsAction(cpyLoginParams)
    }
    private onPasswordChange = (password: string) => {
        const { loginParams, loginParamsAction } = this.props;
        const cpyLoginParams = { ...loginParams };
        cpyLoginParams['user_password'] = password;
        loginParamsAction(cpyLoginParams)
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.txtField}>
                    <View style={styles.txtFieldIn}>
                        <TextField label='Mobile / Email Address'
                            baseColor='#aaa'
                            textColor='black'
                            tintColor="#ACD472"
                            lineWidth={2}
                            returnKeyType={"next"}
                            onSubmitEditing={() => {
                                this.secondField.current.focus();
                            }}
                            animationDuration={60}
                            onChangeText={(userId: string) => this.onUserIdChange(userId)}
                            onFocus={() => {
                                this.setState({ isUserId: true });
                            }}
                            onBlur={() => {
                                this.setState({ isUserId: false });
                            }}
                        />
                        <Image
                            source={
                                this.state['isUserId'] ?
                                    Images.USER_ACTIVE
                                    :
                                    Images.USER_INACTIVE
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
                            lineWidth={2}
                            ref={this.secondField}
                            animationDuration={60}
                            secureTextEntry={true}
                            onChangeText={(password: string) => this.onPasswordChange(password)}
                            onFocus={() => {
                                this.setState({ isPassword: true });
                            }}
                            onBlur={() => {
                                this.setState({ isPassword: false });
                            }}
                        />
                        <Image
                            source={
                                this.state['isPassword'] ?
                                    Images.EYE_ACTIVE
                                    :
                                    Images.EYE_INACTIVE
                            }
                            style={styles.imageEye}
                        ></Image>
                    </View>
                </View>
            </View>
        )
    }
}

