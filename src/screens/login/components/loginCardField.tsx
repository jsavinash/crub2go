import * as React from "react"
import { View, StyleSheet, Image } from "react-native"
import { TextField } from 'react-native-material-textfield';
import { showAlert, logger } from '@common_service';
import {
    ErrTitle,
    ErrMobileOrEmailMsg,
    ErrPasswordMsg
} from '@constant';

export interface Props {
    textFieldFocus: (text: string) => string,
    isFieldDataFetch: boolean,
    passData: (obj: any, isPassed: boolean) => any
}

interface State {
    email: string,
    password: string,
    isEmail: boolean,
    isPass: boolean
}

export class LoginCardField extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            isEmail: false,
            isPass: false,
            email: '',
            password: ''
        };
    }

    componentWillReceiveProps(nextProps: any) {
        if (nextProps.isFieldDataFetch) {
            const { email, password } = this.state;
            let isPassed: boolean = true;
            if (!email) {
                isPassed = false;
                showAlert(ErrTitle, ErrMobileOrEmailMsg, 'danger');
            }
            if (!password) {
                isPassed = false;
                showAlert(ErrTitle, ErrPasswordMsg, 'danger');
            }
            this.props.passData({
                username: this.state.email,
                password: this.state.password
            }, isPassed);
        }
    }
    textFields = (textField: string) => {
        this.props.textFieldFocus(textField);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.txtField}>
                    <View style={styles.txtFieldIn}>
                        <TextField label='Enter Mobile'
                            baseColor='#aaa'
                            textColor='black'
                            tintColor="#ACD472"
                            lineWidth={2}
                            animationDuration={60}
                            onChangeText={(email: string) => this.setState({ email })}
                            onFocus={() => {
                                this.textFields('Mobile');
                                this.setState({ isEmail: true });
                            }}
                            onBlur={() => {
                                this.textFields('None');
                                this.setState({ isEmail: false });
                            }}
                        />
                        <Image
                            source={
                                this.state.isEmail ?
                                    require('../../../assets/app-images/user_active.png') :
                                    require('../../../assets/app-images/user_deactive.png')
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
                            animationDuration={60}
                            secureTextEntry={true}
                            onChangeText={(password: string) => this.setState({ password })}
                            onFocus={() => {
                                this.textFields('Password');
                                this.setState({ isPass: true });
                            }}
                            onBlur={() => {
                                this.textFields('None');
                                this.setState({ isPass: false });
                            }}
                        />
                        <Image
                            source={
                                this.state.isPass ?
                                    require('../../../assets/app-images/activated_eye.png') :
                                    require('../../../assets/app-images/deactivated_eye.png')
                            }
                            style={styles.imageEye}
                        ></Image>
                    </View>
                </View>
            </View>
        )
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 0.8,
        margin: 14,
    },
    image: {
        height: 35,
        width: 38,
        position: 'absolute',
        right: 0,
        marginTop: 28,
    },
    imageEye: {
        height: 35,
        width: 40,
        position: 'absolute',
        right: 0,
        marginTop: 25
    },
    txtField: {
        flexDirection: 'row'
    },
    txtFieldIn: {
        width: '100%'
    }
});