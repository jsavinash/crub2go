import * as React from "react"
import { Dimensions, ImageBackground, StyleSheet, View, Text, Image, KeyboardAvoidingView } from "react-native";
import SplashScreen from 'react-native-splash-screen';
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
import { EditProfileCard } from '../components';
import {
    ErrTitle,
    InternalServerError,
    ErrInternetCon,
    InternalServerErrorTitle
} from '@constant';
import PhotoUpload from 'react-native-photo-upload';
import { IEditProfile, ICustomer } from '@models';
import { showAlert, transformToFromData, logger } from '@common_service';
import {
    CustomerRestService
} from '../../../services';
import Spinner from 'react-native-loading-spinner-overlay';

export interface RegisterProps {
    navigation: any,
    customerCreate: (payload: any) => any,
    customer: any
}
interface RegisterState {
    photo: any,
    loader: boolean;
}
export class EditProfile extends React.Component<RegisterProps, RegisterState> {
    constructor(props: RegisterProps) {
        super(props);
        this.state = {
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
        let edit: IEditProfile = {
            user_name: user['username'],
        };
        let data: any = transformToFromData(edit);
        if (_self.state.photo && _self.state.photo.uri) {
            data.append('user_profile', {
                uri: photo.uri,
                type: photo.type,
                name: photo.fileName
            });
        }
        _self.setState({ loader: true });
        CustomerRestService.customerProfileEdit(data, this.props.customer['user_access_token']).then((editProfile: any) => {
            console.log('editProfile', editProfile);
            if (editProfile.problem === "NETWORK_ERROR") {
                _self.setState({ loader: false });
                showAlert(ErrTitle, ErrInternetCon, 'info');
                return;
            }
            let customerData: ICustomer = editProfile['data']['data'][0];
            if (editProfile['data']['settings']['success'] == 1) {
                _self.setState({ loader: false });
                _self.props.customerCreate(customerData);
                showAlert(ErrTitle, editProfile['data']['settings']['message'], 'success');
                this.props.navigation.goBack();
            }
            else if (editProfile['data']['settings']['success'] == 0) {
                _self.setState({ loader: false });
                showAlert(ErrTitle, editProfile['data']['settings']['message'], 'danger');
            }
        }).catch((error) => {
            _self.setState({ loader: false });
            logger('Edit Profile', 'ERROR', error);
            showAlert(InternalServerErrorTitle, InternalServerError, 'warning');
        });

    }
    onSelectPhotoUpload = (photo: any) => {
        this.setState({ photo });
    }
    render() {
        const ImagePic = <Image
            style={styles.headerImgStyle}
            resizeMode='cover'
            source={{ uri: this.props.customer.user_profile }}
        />;
        const DefaultImage = <Image
            style={styles.headerImgStyle}
            resizeMode='cover'
            source={require('../../../assets/app-images/started_user.png')} />;
        return (
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                keyboardVerticalOffset={(-((SCREEN_HEIGHT * 48) / 100))}
                behavior={"position"}
                enabled>
                <Spinner visible={this.state.loader} textContent={"Loading..."} textStyle={{ color: '#FFF' }} />
                <ImageBackground
                    source={require('../../../assets/app-images/bg.png')}
                    style={styles.bgImage}>
                    <View
                        style={styles.header}
                    >
                        <Text style={styles.headerIn}>Edit Profile</Text>
                    </View>
                    <View style={styles.headerImg}>
                        <PhotoUpload
                            onResponse={(image: any) => {
                                if (image) {
                                    this.setState({ photo: image });
                                }
                            }}>
                            {(this.props.customer.user_profile != '') ? ImagePic : DefaultImage}
                        </PhotoUpload>
                    </View>
                    <EditProfileCard
                        customer={this.props.customer}
                        onSubmit={this.onSubmit} />
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
        width: ((SCREEN_WIDTH * 35) / 100),
        height: ((SCREEN_HEIGHT * 20) / 100),
        borderWidth: 1,
        backgroundColor: 'white',
        borderRadius: 22,
        borderColor: 'transparent',
        alignItems: 'center',
        marginTop: '5%',
        marginBottom: 10
    },
    headerImgStyle: {
        width: ((SCREEN_WIDTH * 35) / 100),
        height: ((SCREEN_HEIGHT * 20) / 100),
        borderRadius: 22
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