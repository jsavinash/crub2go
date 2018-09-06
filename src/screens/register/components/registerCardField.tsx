import * as React from "react"
import { View, StyleSheet, Image } from "react-native"
import { TextField } from 'react-native-material-textfield';
import {
    ErrTitle,
    ErrNameMsg,
    ErrMobileMsg,
    ErrMobileValidMsg,
    ErrEmailMsg,
    ErrEmailValidMsg,
    ErrPasswordMsg,
    ErrCnfPasswordMsg,
    ErrPassMatch
} from '@constant';
import { showAlert } from '@common_service';

export interface RegisterCardFieldProps {
    textFieldFocus: (text: string) => string,
    isFieldDataFetch: boolean,
    passData: (obj: any, isPassed: boolean) => any
}
interface RegisterCardFieldState {
    isName: boolean,
    isMobile: boolean,
    isEmail: boolean,
    isPass: boolean,
    isCnfPass: boolean,
    name: string,
    mobile: string,
    email: string,
    pass: string,
    cnfPass: string
}
export class RegisterCardField extends React.Component<RegisterCardFieldProps, RegisterCardFieldState> {
    constructor(props: RegisterCardFieldProps) {
        super(props);
        this.state =
            {
                isName: false,
                isMobile: false,
                isEmail: false,
                isPass: false,
                isCnfPass: false,
                name: '',
                mobile: '',
                email: '',
                pass: '',
                cnfPass: ''
            };
    }

    passDataToCard = (isPassed: boolean) => {
        this.props.passData({
            username: this.state.name,
            mobile: this.state.mobile,
            email: this.state.email,
            pass: this.state.pass,
            cnfPass: this.state.cnfPass
        }, isPassed);
    }
    componentWillReceiveProps(nextProps: any) {
        const { name, mobile, email, pass, cnfPass } = this.state;
        if (nextProps.isFieldDataFetch) {
            if (!name) {
                showAlert(ErrTitle, ErrNameMsg, 'danger');
                this.passDataToCard(false);
                return;
            }
            console.log('mobile', mobile);
            if (!mobile) {
                showAlert(ErrTitle, ErrMobileMsg, 'danger');
                this.passDataToCard(false);
                return;
            } else if (!(/^[0-9]{10,13}$/.test(mobile))) {
                showAlert(ErrTitle, ErrMobileValidMsg, 'danger');
                this.passDataToCard(false);
                return;
            }
            if (!email) {
                showAlert(ErrTitle, ErrEmailMsg, 'danger');
                this.passDataToCard(false);
                return;
            } else if (!(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/.test(email))) {
                showAlert(ErrTitle, ErrEmailValidMsg, 'danger');
                this.passDataToCard(false);
                return;
            }
            if (!pass) {
                showAlert(ErrTitle, ErrPasswordMsg, 'danger');
                this.passDataToCard(false);
                return;
            }
            if (!cnfPass) {
                showAlert(ErrTitle, ErrCnfPasswordMsg, 'danger');
                this.passDataToCard(false);
                return;
            }
            console.log('pass', pass);
            console.log('cnfPass', cnfPass);
            console.log('cnfPass', (cnfPass == pass));
            console.log('cnfPass', (cnfPass === pass));

            if (!(pass === cnfPass)) {
                showAlert(ErrTitle, ErrPassMatch, 'danger');
                this.passDataToCard(false);
                return;
            }
            this.passDataToCard(true);
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
                        <TextField label='Name'
                            baseColor='#aaa'
                            textColor='black'
                            tintColor="#ACD472"
                            lineWidth={2}
                            animationDuration={60}
                            onFocus={() => {
                                this.textFields('Name');
                                this.setState({ isName: true });
                            }}
                            onBlur={() => {
                                this.textFields('None');
                                this.setState({ isName: false });
                            }}
                            onChangeText={(name: string) => this.setState({ name })}
                        />
                        <Image
                            source={
                                this.state.isName ?
                                    require('../../../assets/app-images/user_active.png') :
                                    require('../../../assets/app-images/user_deactive.png')
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
                                this.textFields('Mobile');
                                this.setState({ isMobile: true });
                            }}
                            onBlur={() => {
                                this.textFields('None');
                                this.setState({ isMobile: false });
                            }}
                            onChangeText={(mobile: string) => this.setState({ mobile })}

                        />
                        <Image
                            source={
                                this.state.isMobile ?
                                    require('../../../assets/app-images/mobile_active.png') :
                                    require('../../../assets/app-images/mobile_deactive.png')
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
                                this.textFields('Email');
                                this.setState({ isEmail: true });
                            }}
                            onBlur={() => {
                                this.textFields('None');
                                this.setState({ isEmail: false });
                            }}
                            onChangeText={(email: string) => this.setState({ email })}
                        />
                        <Image
                            source={
                                this.state.isEmail ?
                                    require('../../../assets/app-images/email_active.png') :
                                    require('../../../assets/app-images/email_deactive.png')
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
                                this.textFields('Password');
                                this.setState({ isPass: true });
                            }}
                            onBlur={() => {
                                this.textFields('None');
                                this.setState({ isPass: false });
                            }}
                            onChangeText={(pass: string) => this.setState({ pass })}
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
                                this.textFields('CnfPassword');
                                this.setState({ isCnfPass: true });
                            }}
                            onBlur={() => {
                                this.textFields('None');
                                this.setState({ isCnfPass: false });
                            }}
                            onChangeText={(cnfPass: string) => this.setState({ cnfPass })}
                        />
                        <Image
                            source={
                                this.state.isCnfPass ?
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
        height: 40,
        width: 40,
        position: 'absolute',
        right: 0,
        marginTop: 25
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