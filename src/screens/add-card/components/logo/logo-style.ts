import { StyleSheet, Dimensions } from "react-native";
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').width;

export const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        height: ((SCREEN_HEIGHT * 20) / 100),
        width: ((SCREEN_WIDTH * 30) / 100),
        marginTop: '8%',
        marginBottom: '2%'
    }
});