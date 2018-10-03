import { StyleSheet, Dimensions } from "react-native";
const SCREEN_HEIGHT = Dimensions.get('window').width;
export const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: '5%',
        right: '4%'
    },
    image: {
        width: ((SCREEN_HEIGHT * 32) / 100),
        height: ((SCREEN_HEIGHT * 32) / 100),
        borderRadius: 100,
    }
});