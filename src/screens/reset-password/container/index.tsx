import * as React from "react"
import { Dimensions, ImageBackground, StyleSheet, View, KeyboardAvoidingView, Text, Image } from "react-native";
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
import { transformToFromData, showAlert, logger } from '@common_service';
import {
    CustomerRestService
} from '../../../services';
import Spinner from 'react-native-loading-spinner-overlay';
import {
    ErrTitle,
    ErrInternetCon,
    InternalServerErrorTitle,
    InternalServerError
} from '@constant';
import { ResetCard } from '../components';
import { IForgot } from '@models';
export interface Props {
    navigation: any
}

interface State {
    keyboard: number,
    reset_key: string,
    pass: string,
    mobile_number: string,
    loader: boolean
}
export class ResetPassword extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            keyboard: 0,
            reset_key: '',
            pass: '',
            mobile_number: '',
            loader: false
        }
    }
    componentDidMount() {
        this.getKey();
    }
    getKey = () => {
        const { navigation } = this.props;
        const reset_key = navigation.getParam('reset_key', '');
        const mobile_number = navigation.getParam('mobile_number', '');
        this.setState({ reset_key, mobile_number });
    }
    navigateTo = (screen: string): any => {
        this.props.navigation.navigate(`${screen}`);
    };

    relativeKeyboardHeight = (textPress: string) => {
        console.log('textPress', textPress);
        if (textPress === 'Pass') {
            let cal = (-((SCREEN_HEIGHT * 40) / 100));
            this.setState({ keyboard: cal });
        }
        if (textPress === 'CnfPass') {
            let cal = (-((SCREEN_HEIGHT * 27) / 100));
            this.setState({ keyboard: cal });
        }
    }
    onSubmit = (user: any) => {
        const _self = this;
        const { reset_key, mobile_number } = this.state;
        let forgot: IForgot = {
            new_password: user['pass'],
            mobile_number,
            reset_key
        };
        this.setState({ loader: true });
        CustomerRestService.customerPassword(transformToFromData(forgot)).then((changePassSuccess: any) => {
            console.log('changePassSuccess', changePassSuccess);
            if (changePassSuccess.problem === "NETWORK_ERROR") {
                showAlert(ErrTitle, ErrInternetCon, 'info');
                _self.setState({ loader: false });
                return;
            }
            if (changePassSuccess['data']['settings']['success'] == 1) {
                this.setState({ loader: false });
                _self.props.navigation.navigate('Login', { screen: "ResetPassword" });
                this.setState({ loader: false });
            } else if (changePassSuccess['data']['settings']['success'] == 0) {
                _self.setState({ loader: false });
                showAlert(ErrTitle, changePassSuccess['data']['settings']['message'], 'danger');
            }
        }).catch((error) => {
            _self.setState({ loader: false });
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
                <Spinner visible={this.state.loader} textContent={"Loading..."} textStyle={{ color: '#FFF' }} />

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
                            }}>Reset Your Password?</Text>
                    </View>
                    <ResetCard
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