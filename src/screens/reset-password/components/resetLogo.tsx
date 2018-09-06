import * as React from "react"
import { StyleSheet, Image, View } from "react-native"
interface Props {

}
export const ResetLogo: React.StatelessComponent<Props> = (props) => {
    return (
        <View style={
            styles.container
        }>
            <Image
                source={require('../../../assets/app-images/login_logo.png')}
                resizeMode="contain"
                style={styles.image}>
            </Image>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        height: 30,
        width: 40,
        position: 'absolute',
        right: 0,
        marginTop: 30
    }
});