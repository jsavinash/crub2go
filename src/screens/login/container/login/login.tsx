import * as React from "react"
import { Dimensions, ImageBackground, ScrollView } from "react-native";
import SplashScreen from 'react-native-splash-screen';
const SCREEN_HEIGHT = Dimensions.get('window').height;
import { Images } from '@themes';
import { styles } from './login-style';
import { ErrTitle, ErrInternetCon, LoginErrorMessage, InternalServerError, InternalServerErrorTitle } from '@constant';
import { showAlert, transformToFromData, storeAsync, logger } from '@common_service';

import { ICustomer, ILogin } from '@models';
import {
    CustomerRestService
} from '../../../../services';

import { LoginCard, Skip, Logo, Footer, Button } from '../../components';
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

    componentDidMount() {
        SplashScreen.hide();
        this.getRouteParams();
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
            if (success['data']['settings']['success'] == 1) {
                let customerData: ICustomer = success['data']['data'][0];
                storeAsync('user', JSON.stringify(customerData));
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
    private skip = () => {
        const { customer, navigation } = this.props;
        console.log("customer", customer);
        if (customer && customer['user_city_id'])
            navigation.navigate('Home');
        else
            navigation.navigate('City');
    }
    render() {
        return (
            <ScrollView>
                <ImageBackground
                    source={Images.BG_IMAGE}
                    style={styles.bgImage}>
                    <Skip />
                    <Logo />
                    <LoginCard />
                    <Footer />
                    <Button />
                </ImageBackground>
            </ScrollView>
        )
    }
}
