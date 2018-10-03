import { StyleSheet, Dimensions } from "react-native";
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').width;

export const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        height: ((SCREEN_HEIGHT * 32) / 100),
        width: ((SCREEN_WIDTH * 70) / 100),
        marginTop: '5%',
        marginBottom: '2%'
    }
});