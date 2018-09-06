import * as React from "react"
import { Dimensions, ImageBackground, StyleSheet, View, TouchableOpacity, Text, Image, KeyboardAvoidingView } from "react-native";
import SplashScreen from 'react-native-splash-screen';
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
import { VerificationCard } from '../components';
import { IRegister, ICustomer, IVerification } from '@models';
import { showAlert, transformToFromData, storeAsync, logger } from '@common_service';
import {
    CustomerRestService
} from '../../../services';
import Spinner from 'react-native-loading-spinner-overlay';

import { ErrTitle, ErrInternetCon, LoginErrorMessage, InternalServerError, InternalServerErrorTitle } from '@constant';

export interface VerificationProps {
    navigation: any,
    customer: any,
    registerCustomer: any,
    customerCreate: (payload: any) => any
}


interface VerificationState {
    otp: string,
    loader: boolean,
    screen: string,
    mobile: string,
    reset_key: string
}

export class Verification extends React.Component<VerificationProps, VerificationState> {
    constructor(props: VerificationProps) {
        super(props);
        this.state = {
            otp: '',
            loader: false,
            screen: '',
            mobile: '',
            reset_key: ''
        };
    }
    componentDidMount() {
        this.getRegisterDetails();
    }
    getRegisterDetails = () => {
        const { navigation } = this.props;
        const screen = navigation.getParam('screen', '');
        if (screen === "Forgot") {
            const otp = navigation.getParam('otp', '');
            const mobile = navigation.getParam('mobile', '');
            const reset_key = navigation.getParam('reset_key', '');
            this.setState({ screen, otp, reset_key })
            if (mobile)
                this.setState({ mobile })
            showAlert('crub2go', 'OTP verification code is sent to mobile number you entered', 'success');
        } else {
            let register = this.props.registerCustomer;
            this.setState({ otp: register.otp })
            this.setState({ mobile: register.mobile })
            this.setState({ screen: 'Register' })
            showAlert('crub2go', 'OTP verification code is sent to mobile number you entered', 'success');
        }
    }
    getNewOtp = () => {
        let customer = this.props.registerCustomer;
        const { screen, mobile } = this.state;
        let verification: IVerification = {
            mobile_number: customer['mobile_number'],
            user_email: customer['user_email']
        };
        this.setState({ loader: true });
        if (screen === 'Register') {
            CustomerRestService.customerVerification(transformToFromData(verification)).then((verificationSuccess: any) => {
                if (verificationSuccess.problem === "NETWORK_ERROR") {
                    showAlert(ErrTitle, ErrInternetCon, 'info');
                    this.setState({ loader: false });
                    return;
                }
                if (verificationSuccess['data']['settings']['success'] == 1) {
                    this.setState({ loader: false });
                    this.setState({ otp: verificationSuccess['data']['data']['otp'] })
                    showAlert('crub2go', 'OTP verification code is sent to mobile number you entered', 'success');
                } else if (verificationSuccess['data']['settings']['success'] == 0) {
                    this.setState({ loader: false });
                }
            }).catch((error) => {
                this.setState({ loader: false });
                console.log('verificationError', error);
            })
        } else {
            CustomerRestService.customerForgot(transformToFromData({ mobile_number: mobile })).then((forgotSuccess: any) => {
                console.log('forgotSuccess', forgotSuccess);
                if (forgotSuccess.problem === "NETWORK_ERROR") {
                    showAlert(ErrTitle, ErrInternetCon, 'info');
                    this.setState({ loader: false });
                    return;
                }
                if (forgotSuccess['data']['settings']['success'] == 1) {
                    this.setState({ loader: false });
                    this.setState({ otp: forgotSuccess['data']['data'][0]['otp'] })
                    showAlert('crub2go', 'OTP verification code is sent to mobile number you entered', 'success');
                } else if (forgotSuccess['data']['settings']['success'] == 0) {
                    this.setState({ loader: false });
                }
            }).catch((error: any) => {
                this.setState({ loader: false });
                console.log('forgotError', error);
            })
        }
    }
    navigateTo = (screen: string): any => {
        this.props.navigation.navigate(`${screen}`);
    };
    submit = (isPress: boolean) => {
        const _self = this;
        const { screen } = this.state;
        if (screen == 'Register') {
            const { registerCustomer } = this.props;
            const register: IRegister = {
                user_name: registerCustomer['user_name'],
                user_password: registerCustomer['user_password'],
                user_email: registerCustomer['user_email'],
                mobile_number: registerCustomer['mobile_number'],
                '@@err': registerCustomer['@@err'],
                photo: registerCustomer['photo']
            };
            let data: any = transformToFromData(register);
            if (registerCustomer['photo'] && registerCustomer['photo'].uri) {
                data.append('user_profile', {
                    uri: registerCustomer.photo.uri,
                    type: registerCustomer.photo.type,
                    name: registerCustomer.photo.fileName
                });
            }
            console.log('registerSuccess data', data);
            this.setState({ loader: true });

            CustomerRestService.customerRegister(data).then((registerSuccess: any) => {
                console.log('registerSuccess', registerSuccess);
                if (registerSuccess.problem === "NETWORK_ERROR") {
                    this.setState({ loader: false });
                    showAlert(ErrTitle, ErrInternetCon, 'info');
                    return;
                }
                if (registerSuccess['data']['settings']['success'] == 1) {
                    this.setState({ loader: false });
                    let customerData: ICustomer = registerSuccess['data']['data'][0];
                    storeAsync('user_access_token', customerData['user_access_token']);
                    storeAsync('user_stripe_id', customerData['user_stripe_id']);
                    _self.props.customerCreate(customerData);
                    _self.props.navigation.navigate('Home');
                } else if (registerSuccess['data']['settings']['success'] == 0) {
                    this.setState({ loader: false });
                    showAlert(ErrTitle, registerSuccess['data']['settings']['success']['message'], 'danger');
                }
            }).catch((error) => {
                this.setState({ loader: false });
                logger('Verification', 'ERROR', error);
                showAlert(InternalServerErrorTitle, InternalServerError, 'warning');
            })
        } else {
            const { reset_key, mobile } = this.state;
            _self.props.navigation.navigate('ResetPassword', { reset_key, mobile_number: mobile });
        }
    }
    render() {
        return (
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                keyboardVerticalOffset={(-((SCREEN_HEIGHT * 30) / 100))}
                behavior={"position"}
                enabled>
                <Spinner visible={this.state.loader} textContent={"Loading..."} textStyle={{ color: '#FFF' }} />
                <ImageBackground
                    source={require('../../../assets/app-images/bg.png')}
                    style={styles.bgImage}>
                    <Image
                        source={require('../../../assets/app-images/forgot.png')}
                        resizeMode="contain"
                        style={styles.image}>
                    </Image>
                    <View style={{
                        alignItems: 'center',
                        marginBottom: '2%'
                    }}>
                        <Text
                            style={{
                                color: 'white',
                                fontSize: 25
                            }}>Enter Verification Code</Text>
                    </View>
                    <VerificationCard
                        mobile={this.state.mobile}
                        otp={this.state.otp}
                        onTrigger={this.submit}
                    />
                    <View
                        style={styles.footer}>
                        <View style={styles.footerIn}>
                            <Text style={styles.txt1}>Didn't Receive The Verification Code</Text>
                            <TouchableOpacity onPress={this.getNewOtp}>
                                <Text style={styles.txt2}>Resend</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ImageBackground>
            </KeyboardAvoidingView>
        )
    }
}
var styles = StyleSheet.create({
    bgImage: {
        flex: 1,
        top: 0,
        left: 0,
        position: 'absolute',
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT,
    },
    header: {
        position: 'absolute',
        flexDirection: 'row',
        top: 0
    },
    headerIn: {
        width: '100%',
    },
    txtTouch: {
        marginTop: '8%',
        right: '10%',
        alignSelf: 'flex-end'
    },
    skip: {
        color: 'white',
        fontSize: 20
    },
    image: {
        alignSelf: 'center',
        height: '18%',
        width: '30%',
        marginTop: '8%',
        marginBottom: '2%'
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        width: SCREEN_WIDTH,
        height: '10%'
    },
    footerIn: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    txt1: {
        marginTop: '1%'
    },
    txt2: {
        color: '#ACD472',
        marginLeft: '2%',
        fontSize: 20,
    }
});