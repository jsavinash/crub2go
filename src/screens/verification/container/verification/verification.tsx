import * as React from "react"
import { ImageBackground, ScrollView } from "react-native";
import SplashScreen from 'react-native-splash-screen';
import {
    Header,
    VerificationLoader,
    Logo,
    Title,
    VerificationCard,
    Button,
    Footer
} from '../../components';
import { Images } from '@themes';
import { IRegisterState } from "@models";
import { styles } from './verification-style';
export interface VerificationProps {
    navigation: any
    registerParamsAction: (reset: IRegisterState) => any,
    registerParams: IRegisterState
}
export class Verification extends React.Component<VerificationProps, {}> {
    constructor(props: VerificationProps) {
        super(props);
    }
    componentDidMount() {
        this.getRouteParams();
    }
    getRouteParams = () => {
        const { navigation, registerParamsAction, registerParams } = this.props;
        const cpyRegisterParams = { ...registerParams };
        const otp = navigation.getParam('otp', '');
        const mobile = navigation.getParam('mobile', '');
        const reset_key = navigation.getParam('reset_key', '');
        cpyRegisterParams['reset_key'] = reset_key;
        cpyRegisterParams['mobile_number'] = mobile;
        cpyRegisterParams['otp'] = otp;
        cpyRegisterParams['screen'] = "Forgot";
        registerParamsAction(cpyRegisterParams);
    }
    render() {
        const { navigation } = this.props;
        return (
            <ScrollView>
                <VerificationLoader />
                <ImageBackground
                    source={Images.BG_IMAGE}
                    style={styles.bgImage}>
                    <Header navigation={navigation} />
                    <Logo />
                    <Title />
                    <VerificationCard />
                    <Button navigation={navigation} />
                    <Footer />
                </ImageBackground>
            </ScrollView>
        )
    }
}
