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
import { styles } from './verification-style';
export interface VerificationProps {
    navigation: any
}
export class Verification extends React.Component<VerificationProps, {}> {
    constructor(props: VerificationProps) {
        super(props);
    }
    componentDidMount() {
        SplashScreen.hide();
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
