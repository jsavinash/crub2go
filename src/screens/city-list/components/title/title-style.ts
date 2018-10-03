import { StyleSheet, Dimensions } from "react-native";
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').width;

export const styles = StyleSheet.create({
    container: {
        fontSize: 22,
        fontWeight: '500',
        color: 'black',
        marginLeft: '4%',
        marginTop: '2%',
        marginBottom: '2%'
    }
});