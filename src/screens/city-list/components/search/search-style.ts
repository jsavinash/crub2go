import { StyleSheet, Dimensions } from "react-native";
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').width;

export const styles = StyleSheet.create({
    container: {
            width: SCREEN_WIDTH,
            height: ((SCREEN_HEIGHT * 15) / 100),
            flexDirection: 'row',
            borderColor: '#aaa',
            borderWidth: 2,
            alignContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
        },
        txtField: {
            width: SCREEN_WIDTH
        }
});