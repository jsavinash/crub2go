import * as React from "react"
import { ImageBackground, ScrollView } from "react-native";
import { AccountMain } from '../../components';
import { styles } from './account-style';
export const Account: React.StatelessComponent<{}> = () => {
    return (
        <ScrollView>
            <ImageBackground
                source={require('../../../../assets/app-images/bg.png')}
                style={styles.bgImage}>
                <AccountMain />
            </ImageBackground>
        </ScrollView>
    )
}
