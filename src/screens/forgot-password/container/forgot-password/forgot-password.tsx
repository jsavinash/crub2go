import * as React from "react"
import { ImageBackground, ScrollView } from "react-native";
import SplashScreen from 'react-native-splash-screen';
import {
    Header,
    Logo,
    ForgotLoader,
    Title,
    ForgotCard,
    Button,
} from '../../components';
import { styles } from './forgot-password-style';
import { Images } from '@themes';
export interface ForgotPasswordProps {
    navigation: any
}
export class ForgotPassword extends React.Component<ForgotPasswordProps, {}> {
    constructor(props: ForgotPasswordProps) {
        super(props);
    }
    componentDidMount() {
        SplashScreen.hide();
    }
    render() {
        const { navigation } = this.props;
        return (
            <ScrollView>
                <ForgotLoader />
                <ImageBackground
                    source={Images.BG_IMAGE}
                    style={styles.bgImage}>
                    <Header navigation={navigation} />
                    <Logo />
                    <Title />
                    <ForgotCard />
                    <Button navigation={navigation} />
                </ImageBackground>
            </ScrollView>
        )
    }
}
