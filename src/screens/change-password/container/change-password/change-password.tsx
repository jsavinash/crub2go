import * as React from "react"
import { ImageBackground, ScrollView } from "react-native";
import SplashScreen from 'react-native-splash-screen';
import {
    Header,
    Logo,
    Title,
    ChangePasswordCard,
    Button,
    ChangePasswordLoader
} from '../../components';
import { Images } from "@themes";
import { styles } from './change-password-style';
export interface ChangePasswordProps {
    navigation: any
}
export class ChangePassword extends React.Component<ChangePasswordProps, {}> {
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

    render() {
        const { navigation } = this.props;
        return (
            <ScrollView>
                <ChangePasswordLoader />
                <ImageBackground
                    source={Images.BG_IMAGE}
                    style={styles.bgImage}>
                    <Header />
                    <Logo />
                    <Title />
                    <ChangePasswordCard />
                    <Button navigation={navigation} />
                </ImageBackground>
            </ScrollView>
        )
    }
}
