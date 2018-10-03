import * as React from "react";
import { View, Image, Text, TouchableWithoutFeedback } from "react-native";
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
    isPassword: boolean,
    passInputType: boolean
}

export class LoginCardField extends React.Component<LoginCardFieldProps, LoginCardFieldState> {
    secondField: any;
    constructor(props: LoginCardFieldProps) {
        super(props);
        this.state = {
            isUserId: false,
            isPassword: false,
            passInputType: true
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
    private passSecure = () => {
        const { passInputType } = this.state;
        console.log("passInputType", passInputType);
        this.setState({ passInputType: !passInputType });
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
                            secureTextEntry={this.state.passInputType}
                            onChangeText={(password: string) => this.onPasswordChange(password)}
                            onFocus={() => {
                                this.setState({ isPassword: true });
                            }}
                            onBlur={() => {
                                this.setState({ isPassword: false });
                            }}
                        />
                        <TouchableWithoutFeedback onPress={() => {
                            this.passSecure();
                        }}>
                            <Image
                                source={Images.EYE_ACTIVE}
                                style={styles.imageEye}
                            ></Image>
                        </TouchableWithoutFeedback>
                        {this.state.passInputType ? <Text style={{
                            position: 'absolute',
                            fontSize: 24,
                            fontWeight: '900',
                            height: '40%',
                            width: '8%',
                            right: 0,
                            bottom: '22%',
                            color: '#ACD472',
                        }}>\</Text> : <Text style={{
                            position: 'absolute',
                        }} />
                        }
                    </View>
                </View>
            </View>
        )
    }
}

