import * as React from "react"
import { StyleSheet, View, Text, ActivityIndicator } from "react-native";
import { AsyncStorage } from "react-native"
export interface AppEntryProps {
    navigation: any,
    customerCreate: any,
}

interface AppEntryState {

}
export class AppEntry extends React.Component<AppEntryProps, AppEntryState> {
    constructor(props: AppEntryProps) {
        super(props);
    }
    navigateIfToken = () => {
        const { navigation } = this.props;
        const getUser = (retrievedUser: any) => {
            const user = JSON.parse(retrievedUser);
            this.props.customerCreate(user);
            if (user != null) {
                navigation.navigate('Home');
            } else {
                navigation.navigate('Login');
            }
        }
        AsyncStorage.getItem("user").then(getUser);
    }

    componentDidMount() {
        this.navigateIfToken();
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