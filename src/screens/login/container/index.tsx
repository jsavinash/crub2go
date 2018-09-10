import * as React from "react"
import { Dimensions, ImageBackground, KeyboardAvoidingView, StyleSheet, View, TouchableOpacity, Text, Image, Alert } from "react-native";
import SplashScreen from 'react-native-splash-screen';
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
import { ErrTitle, ErrInternetCon, LoginErrorMessage, InternalServerError, InternalServerErrorTitle } from '@constant';
import { showAlert, transformToFromData, storeAsync, logger } from '@common_service';
import { AsyncStorage } from "react-native"

import { ICustomer, ILogin } from '@models';
import {
    CustomerRestService
} from '../../../services';

import { LoginCard } from '../components';
export interface Props {
    customerCreate: (payload: any) => any,
    navigation: any,
    customer: any,
    connection: boolean
}

interface State {
    keyboard: number
}
export class Login extends React.Component<Props, State> {
    dropdown: any
    constructor(props: Props) {
        super(props);
        this.state = {
            keyboard: 0
        };
    }

    navigateIfToken = () => {
        const receiveLoginDetails = (value: any) => {
            if (value) {
                console.log('token', value);
                this.props.navigation.navigate('Home');
            }
        }
        AsyncStorage.getItem("user_access_token").then(receiveLoginDetails);

    }

    componentDidMount() {
        SplashScreen.hide();
        this.getRouteParams();
        this.navigateIfToken();
    }


    getRouteParams = () => {
        const { navigation } = this.props;
        const screen = navigation.getParam('screen', '');
        if (screen)
            showAlert('crub2go', 'Password updated Successfully', 'success');
    }

    private customerLogin = (customer: ILogin) => {
        const _self = this;
        CustomerRestService.customerLogin(transformToFromData(customer)).then((success: any) => {
            if (success.problem === "NETWORK_ERROR") {
                showAlert(ErrTitle, ErrInternetCon, 'info');
                return;
            }
            console.log('enter', success);

            if (success['data']['settings']['success'] == 1) {
                let customerData: ICustomer = success['data']['data'][0];
                storeAsync('user_access_token', customerData['user_access_token']);
                storeAsync('user_stripe_id', customerData['user_stripe_id']);
                _self.props.customerCreate(customerData);
                _self.props.navigation.navigate('Home');
            } else if (success['data']['settings']['success'] == 0) {
                showAlert(ErrTitle, LoginErrorMessage, 'danger');
            }
        }).catch((error) => {
            logger('Login', 'ERROR', error);
            showAlert(InternalServerErrorTitle, InternalServerError, 'warning');
        });
    }

    private navigateTo = (screen: string): any => {
        this.props.navigation.navigate(`${screen}`);
    };

    private relativeKeyboardHeight = (textPress: string) => {
        if (textPress === 'Mobile') {
            let cal = (-((SCREEN_HEIGHT * 48) / 100));
            this.setState({ keyboard: cal });
        }
        if (textPress === 'Password') {
            let cal = (-((SCREEN_HEIGHT * 28) / 100));
            this.setState({ keyboard: cal });
        }
    }
    private onSubmit = (user: any) => {
        const onLogin: ILogin = {
            user_name: user.username,
            user_password: user.password
        }
        this.customerLogin(onLogin);
    };



    render() {
        return (
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                keyboardVerticalOffset={this.state.keyboard}
                behavior={"position"}
                enabled>
                <ImageBackground
                    source={require('../../../assets/app-images/bg.png')}
                    style={styles.bgImage}>
                    <View style={styles.header}>
                        <View style={styles.headerIn}>
                            <TouchableOpacity style={styles.txtTouch} onPress={() => {
                                this.navigateTo('Home');
                            }}>
                                <Text style={styles.skip}>Skip</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Image
                        source={require('../../../assets/app-images/login_logo.png')}
                        resizeMode="contain"
                        style={styles.image}>
                    </Image>
                    <LoginCard
                        keyboardHeight={this.relativeKeyboardHeight}
                        nav={this.props.navigation}
                        onSubmit={this.onSubmit}
                    />
                    <View
                        style={styles.footer}>
                        <View style={styles.footerIn}>
                            <Text style={styles.txt1}>Don't have an account?</Text>
                            <TouchableOpacity onPress={() => {
                                this.navigateTo('Register');
                            }}>
                                <Text style={styles.txt2}>Register</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ImageBackground>
            </KeyboardAvoidingView >
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
        height: 160,
        width: 230,
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