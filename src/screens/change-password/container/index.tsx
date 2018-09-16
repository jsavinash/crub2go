import * as React from "react"
import { Dimensions, ImageBackground, KeyboardAvoidingView, StyleSheet, View, Text, Image } from "react-native";
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
import { ChangePasswordCard } from '../components';
import SplashScreen from 'react-native-splash-screen';
import { showAlert, transformToFromData, logger } from '@common_service';
import {
    ErrTitle,
    InternalServerError,
    ErrInternetCon,
    InternalServerErrorTitle
} from '@constant';
import {
    CustomerRestService
} from '../../../services';
import { IChangePass } from "@models";
import Spinner from 'react-native-loading-spinner-overlay';
export interface ChangePasswordProps {
    navigation: any
}


interface ChangePasswordState {
    keyboard: number,
    loader: boolean,

}
export class ChangePassword extends React.Component<ChangePasswordProps, ChangePasswordState> {
    constructor(props: ChangePasswordProps) {
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
        if (textPress === 'Old') {
            let cal = (-((SCREEN_HEIGHT * 36) / 100));
            this.setState({ keyboard: cal });
        }
        if (textPress === 'New') {
            let cal = (-((SCREEN_HEIGHT * 36) / 100));
            this.setState({ keyboard: cal });
        }
        if (textPress === 'Cnf') {
            let cal = (-((SCREEN_HEIGHT * 27) / 100));
            this.setState({ keyboard: cal });
        }
    }
    onSubmit = (user: any) => {
        const changePass: IChangePass = {
            old_password: user['oldPass'],
            new_password: user['newPass']
        };
        this.setState({ loader: true });
        CustomerRestService.customerPasswordChange(transformToFromData(changePass)).then((forgotUser: any) => {
            if (forgotUser.problem === "NETWORK_ERROR") {
                showAlert(ErrTitle, ErrInternetCon, 'info');
                this.setState({ loader: false });
                return;
            }
            if (forgotUser['data']['settings']['success'] == 1) {
                this.props.navigation.navigate('Home');
            } else if (forgotUser['data']['settings']['success'] == 401) {
                this.setState({ loader: false });
                showAlert(ErrTitle, forgotUser['data']['settings']['message'], 'danger');
                this.props.navigation.navigate('Home');
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
                        source={require('../../../assets/app-images/reset.png')}
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
                            }}>Change Your Password</Text>
                    </View>
                    <ChangePasswordCard
                        keyboardHeight={this.relativeKeyboardHeight}
                        nav={this.props.navigation}
                        onSubmit={this.onSubmit}
                    />
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