import { StyleSheet, Dimensions } from "react-native";
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

export const styles = StyleSheet.create({
    container: {
        top: ((SCREEN_HEIGHT * 2) / 100),
        marginLeft: ((SCREEN_HEIGHT * 3) / 100)
    },
    img: {
        width: ((SCREEN_WIDTH * 8) / 100),
        height: ((SCREEN_HEIGHT * 4) / 100),
    }
});