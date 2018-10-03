import * as React from "react"
import { ImageBackground, ScrollView } from "react-native";
import SplashScreen from 'react-native-splash-screen';
import { Images } from '@themes';
import { styles } from './login-style';
import { showAlert } from '@common_service';
import { LoginLoader, LoginCard, Skip, Logo, Footer, Button } from '../../components';
export interface Props {
    customerCreate: (payload: any) => any,
    navigation: any,
    customer: any,
    connection: boolean
}
export class Login extends React.Component<Props, {}> {
    dropdown: any
    constructor(props: Props) {
        super(props);
    }

    componentDidMount() {
        SplashScreen.hide();
        this.getRouteParams();
    }

    getRouteParams = () => {
        const { navigation } = this.props;
        const screen = navigation.getParam('screen', '');
        if (screen == "Forgot")
            showAlert('crub2go', 'Password updated Successfully', 'success');
    }
    render() {
        const { navigation } = this.props;
        return (
            <ScrollView>
                <LoginLoader />
                <ImageBackground
                    source={Images.BG_IMAGE}
                    style={styles.bgImage}>
                    <Skip />
                    <Logo />
                    <LoginCard />
                    <Footer navigation={navigation} />
                    <Button navigation={navigation} />
                </ImageBackground>
            </ScrollView>
        )
    }
}
