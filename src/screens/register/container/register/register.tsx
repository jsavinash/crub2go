import * as React from "react"
import { ImageBackground, ScrollView } from "react-native";
import SplashScreen from 'react-native-splash-screen';
import { RegisterCard, RegisterLoader, Header, Upload, Button } from '../../components';
import { styles } from './register-style';
import { Images } from '@themes';
export interface RegisterProps {
    navigation: any
}
export class Register extends React.Component<RegisterProps, {}> {
    constructor(props: RegisterProps) {
        super(props);
    }
    componentDidMount() {
        SplashScreen.hide();
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
                    <Upload />
                    <RegisterCard />
                    <Button navigation={navigation} />
                </ImageBackground>
            </ScrollView>
        )
    }
}
