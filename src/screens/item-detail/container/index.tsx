import * as React from "react";
import { View, StyleSheet, KeyboardAvoidingView } from "react-native";
import SplashScreen from 'react-native-splash-screen';
import { MainContainer } from '../components';

export interface PlaceDetailProps {

}
interface PlaceDetailPropsState {

}
export class ItemDetail extends React.Component<PlaceDetailProps, PlaceDetailPropsState> {
    constructor(props: PlaceDetailProps) {
        super(props)
    }
    componentDidMount() {
        SplashScreen.hide();
    }
    render() {
        return (
           
            <View style={styles.container}>
                <MainContainer />
            </View>

        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})