import * as React from "react"
import { ImageBackground, ScrollView } from "react-native";
import SplashScreen from 'react-native-splash-screen';
import { RegisterCard, RegisterLoader, Header, Upload } from '../../components';
import { styles } from './register-style';
import { Images } from '@themes';
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
} from '../../../../services';
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
        const { navigation } = this.props;
        return (
            <ScrollView>
                <RegisterLoader />
                <ImageBackground
                    source={Images.BG_IMAGE}
                    style={styles.bgImage}>
                    <Header navigation={navigation} />
                    <Upload/>
                    {/* <Skip />
                    <Logo />
                    <LoginCard />
                    <Footer navigation={navigation} />
                    <Button navigation={navigation} /> */}
                </ImageBackground>
            </ScrollView>

            // <Spinner visible={this.state.loader} textContent={"Loading..."} textStyle={{ color: '#FFF' }} />
            // <ImageBackground
            //     source={require('../../../assets/app-images/bg.png')}
            //     style={styles.bgImage}>
            //     <View
            //         style={styles.header}
            //     >



            //         <Text style={styles.headerIn}>Let's Get Started!</Text>
            //     </View>
            //     <View style={styles.headerImg}>
            //         <PhotoUpload
            //             onResponse={(image: any) => {
            //                 if (image) {
            //                     this.setState({ photo: image });
            //                 }
            //             }}>
            //             <Image
            //                 style={styles.headerImgStyle}
            //                 resizeMode='cover'
            //                 source={require('../../../assets/app-images/started_user.png')} />
            //         </PhotoUpload>
            //     </View>
            //     <RegisterCard
            //         keyboardHeight={this.relativeKeyboardHeight}
            //         onSubmit={this.onSubmit}
            //     />
            // </ImageBackground>
        )
    }
}
