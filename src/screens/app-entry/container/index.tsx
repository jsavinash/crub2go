import * as React from "react"
import { StyleSheet, View, Text, ActivityIndicator } from "react-native";
import { AsyncStorage } from "react-native"
export interface Props {
    navigation: any
}

interface State {

}
export class AppEntry extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    navigateIfToken = () => {
        const { navigation } = this.props;
        const receiveLoginDetails = (value: any) => {
            if (value) {
                navigation.navigate('Home');
            } else {
                navigation.navigate('Login');
            }
        }
        AsyncStorage.getItem("user_access_token").then(receiveLoginDetails);
    }

    componentDidMount() {
        const { navigation } = this.props;
        navigation.navigate('Home');
       // this.navigateIfToken();
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Loading.....</Text>
            </View>
        )
    }
}
var styles = StyleSheet.create({
    container: {
        flex: 1
    }
});