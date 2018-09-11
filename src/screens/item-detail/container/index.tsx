import * as React from "react";
import { Text, View, StyleSheet, Dimensions, AsyncStorage, TouchableHighlight, Image } from "react-native";
import SplashScreen from 'react-native-splash-screen';
import { MainContainer } from '../components';
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
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