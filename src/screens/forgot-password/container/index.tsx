import * as React from "react"
import { Dimensions, ImageBackground, KeyboardAvoidingView, StyleSheet, View, TouchableOpacity, Text, Image } from "react-native";
import SplashScreen from 'react-native-splash-screen';
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
import { ForgotCard } from '../components';
import { showAlert, transformToFromData, logger } from '@common_service';
import {
    CustomerRestService
} from '../../../services';
import Spinner from 'react-native-loading-spinner-overlay';

import {
    ErrTitle,
    InternalServerError,
    ErrInternetCon,
    InternalServerErrorTitle
} from '@constant';
export interface ForgotPasswordProps {
    navigation: any
}


interface ForgotPasswordState {
    keyboard: number,
    loader: boolean,
}


export class ForgotPassword extends React.Component<ForgotPasswordProps, ForgotPasswordState> {
    constructor(props: ForgotPasswordProps) {
        super(props);
        this.state = {
            keyboard: 0,
            loader: false
        };
    }
    componentDidMount() {
        SplashScreen.hide();
    }
    navigateTo = (screen: string): any => {
        this.props.navigation.navigate(`${screen}`);
    };
    relativeKeyboardHeight = (textPress: string) => {
        if (textPress === 'Mobile') {
            let cal = (-((SCREEN_HEIGHT * 36) / 100));
            this.setState({ keyboard: cal });
        }
    }
    onSubmit = (user: any) => {
        let data = {
            mobile_number: user['mobile']
        }
        this.setState({ loader: true });
        CustomerRestService.customerForgot(transformToFromData(data)).then((forgotUser: any) => {
            if (forgotUser.problem === "NETWORK_ERROR") {
                showAlert(ErrTitle, ErrInternetCon, 'info');
                this.setState({ loader: true });
                return;
            }
            if (forgotUser['data']['settings']['success'] == 1) {
                this.setState({ loader: false });
                let otp = forgotUser['data']['data'][0]['otp'];
                let reset_key = forgotUser['data']['data'][0]['reset_key'];
                this.props.navigation.navigate('Verification', { otp, screen: 'Forgot', mobile: user['mobile'], reset_key });
            } else if (forgotUser['data']['settings']['success'] == 0) {
                this.setState({ loader: false });
                showAlert(ErrTitle, forgotUser['data']['settings']['message'], 'danger');
            }
        }).catch((error) => {
            this.setState({ loader: false });
            logger('Register', 'ERROR', error);
            showAlert(InternalServerErrorTitle, InternalServerError, 'warning');
        });
    }
    render() {
        return (
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                keyboardVerticalOffset={this.state.keyboard}
                behavior={"position"}
                enabled>
                <Spinner visible={this.state.loader} textStyle={{ color: '#FFF' }} />
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
                            }}>Forgot your password?</Text>
                    </View>
                    <ForgotCard
                        keyboardHeight={this.relativeKeyboardHeight}
                        nav={this.props.navigation}
                        onSubmit={this.onSubmit}
                    />
                    <View
                        style={styles.footer}>
                        <View style={styles.footerIn}>
                            <Text style={styles.txt1}>Already have an Account?</Text>
                            <TouchableOpacity onPress={() => { this.navigateTo('Login') }}>
                                <Text style={styles.txt2}>Login</Text>
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