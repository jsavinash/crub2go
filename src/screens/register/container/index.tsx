import * as React from "react"
import { Dimensions, ImageBackground, StyleSheet, View, Text, Image, KeyboardAvoidingView } from "react-native";
import SplashScreen from 'react-native-splash-screen';
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
import { RegisterCard } from '../components';
import {
    ErrTitle,
    InternalServerError,
    ErrInternetCon,
    InternalServerErrorTitle
} from '@constant';
import PhotoUpload from 'react-native-photo-upload';
import { IRegister, ICustomer, IVerification } from '@models';
import { showAlert, transformToFromData, storeAsync, logger } from '@common_service';
import {
    CustomerRestService
} from '../../../services';
import Spinner from 'react-native-loading-spinner-overlay';

export interface RegisterProps {
    navigation: any,
    customerCreate: (payload: any) => any,
    registerCustomer: (payload: any) => any,
    connection: any
}
interface RegisterState {
    keyboard: number,
    photo: any,
    loader: boolean;
}
export class Register extends React.Component<RegisterProps, RegisterState> {
    constructor(props: RegisterProps) {
        super(props);
        this.state = {
            keyboard: 0,
            photo: {},
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
        if (textPress === 'Name') {
            let cal = (-((SCREEN_HEIGHT * 48) / 100));
            this.setState({ keyboard: cal });
        }
        if (textPress === 'Mobile') {
            let cal = (-((SCREEN_HEIGHT * 32) / 100));
            this.setState({ keyboard: cal });
        }
        if (textPress === 'Email') {
            let cal = (-((SCREEN_HEIGHT * 35) / 100));
            this.setState({ keyboard: cal });
        }
        if (textPress === 'Password') {
            let cal = (-((SCREEN_HEIGHT * 25) / 100));
            this.setState({ keyboard: cal });
        }
        if (textPress === 'CnfPassword') {
            let cal = (-((SCREEN_HEIGHT * 12) / 100));
            this.setState({ keyboard: cal });
        }
    }
    onSubmit = (user: any) => {
        let _self = this;
        const { photo } = this.state;
        const register: IRegister = {
            user_name: user['username'],
            user_password: user['pass'],
            user_email: user['email'],
            mobile_number: user['mobile'],
            '@@err': user['isAgreed']
        };
        if (this.state.photo && this.state.photo.uri)
            register.photo = photo

        let verification: IVerification = {
            mobile_number: user['mobile'],
            user_email: user['email'],
        };
        this.setState({ loader: true });
        CustomerRestService.customerVerification(transformToFromData(verification)).then((verifyUser: any) => {
            console.log('verifyUser', verifyUser);
            if (verifyUser.problem === "NETWORK_ERROR") {
                showAlert(ErrTitle, ErrInternetCon, 'info');
                return;
            }
            if (verifyUser['data']['settings']['success'] == 1) {
                this.setState({ loader: false });
                register.otp = verifyUser['data']['data']['otp'];
                _self.props.registerCustomer(register);
                _self.props.navigation.navigate('Verification');
            } else if (verifyUser['data']['settings']['success'] == 0) {
                this.setState({ loader: false });
                showAlert(ErrTitle, verifyUser['data']['settings']['message'], 'danger');
            }
        }).catch((error) => {
            this.setState({ loader: false });
            logger('Register', 'ERROR', error);
            showAlert(InternalServerErrorTitle, InternalServerError, 'warning');
        });

    }
    onSelectPhotoUpload = (photo: any) => {
        this.setState({ photo });
    }
    render() {
        return (
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                keyboardVerticalOffset={this.state.keyboard}
                behavior={"position"}
                enabled>
                <Spinner visible={this.state.loader} textContent={"Loading..."} textStyle={{ color: '#FFF' }} />
                <ImageBackground
                    source={require('../../../assets/app-images/bg.png')}
                    style={styles.bgImage}>
                    <View
                        style={styles.header}
                    >



                        <Text style={styles.headerIn}>Let's Get Started!</Text>
                    </View>
                    <View style={styles.headerImg}>
                        <PhotoUpload
                            onResponse={(image: any) => {
                                if (image) {
                                    this.setState({ photo: image });
                                }
                            }}>
                            <Image
                                style={styles.headerImgStyle}
                                resizeMode='cover'
                                source={require('../../../assets/app-images/started_user.png')} />
                        </PhotoUpload>
                    </View>
                    <RegisterCard
                        keyboardHeight={this.relativeKeyboardHeight}
                        onSubmit={this.onSubmit}
                    />
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
        marginTop: '2%',
        alignItems: 'center'
    },
    headerIn: {
        color: 'white',
        fontSize: 20
    },
    headerImg: {
        alignSelf: 'center',
        height: '15%',
        width: '25%',
        backgroundColor: 'white',
        marginTop: 4,
        marginBottom: 10
    },
    headerImgStyle: {
        width: 100,
        height: 100,
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
        height: '30%',
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