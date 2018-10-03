import * as React from "react"
import { ImageBackground, ScrollView } from "react-native";
import { styles } from './reset-password-style';
import { IResetPasswordState } from "@models";
import SplashScreen from 'react-native-splash-screen';

import {
    Button,
    Header,
    Logo,
    ResetCard,
    Title,
    ResetLoader
} from '../../components';
import { Images } from "@themes";
export interface ResetPasswordProps {
    navigation: any,
    resetParamsAction: (resetPassword: IResetPasswordState) => any,
    resetParams: IResetPasswordState
}

export class ResetPassword extends React.Component<ResetPasswordProps, {}> {
    constructor(props: ResetPasswordProps) {
        super(props);
    }
    componentDidMount() {
        this.getKey();
        SplashScreen.hide();
    }
    getKey = () => {
        const { navigation, resetParamsAction, resetParams } = this.props;
        const cpyResetParams = { ...resetParams };
        const reset_key = navigation.getParam('reset_key', '');
        const mobile_number = navigation.getParam('mobile_number', '');
        if (reset_key && mobile_number) {
            cpyResetParams['reset_key'] = reset_key;
            cpyResetParams['mobile_number'] = mobile_number;
            resetParamsAction(cpyResetParams)
        }
    }
    render() {
        const { navigation } = this.props;
        return (
            <ScrollView>
                <ResetLoader />
                <ImageBackground
                    source={Images.BG_IMAGE}
                    style={styles.bgImage}>
                    <Header navigation={navigation} />
                    <Logo />
                    <Title />
                    <ResetCard />
                    <Button navigation={navigation} />
                </ImageBackground>
            </ScrollView>
        )
    }
}
