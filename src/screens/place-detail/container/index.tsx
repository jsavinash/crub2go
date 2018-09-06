import * as React from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";
import SplashScreen from 'react-native-splash-screen';
import { MainBox } from '../components/mainBox';
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
export interface PlaceDetailProps {

}

interface PlaceDetailPropsState {

}

export class PlaceDetail extends React.Component<PlaceDetailProps, PlaceDetailPropsState> {
    constructor(props: PlaceDetailProps) {
        super(props)
    }
    componentDidMount() {
        SplashScreen.hide();
    }
    render() {
        return (
            <View style={styles.container}>
                <MainBox />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        top: 0,
        left: 0,
        position: 'absolute',
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT,
    }
})