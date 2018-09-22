import { StyleSheet, Dimensions } from "react-native";
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

export const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        borderColor: 'black',
        borderRadius: 22,
        width: ((SCREEN_WIDTH * 90) / 100),
        height: ((SCREEN_HEIGHT * 44) / 100),
        backgroundColor: 'white',
        marginBottom:((SCREEN_HEIGHT * 26) / 100)
    }
});

