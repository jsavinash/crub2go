import { StyleSheet, Dimensions } from "react-native";
const SCREEN_HEIGHT = Dimensions.get('window').width;
export const styles = StyleSheet.create({
    btnTch: {
        width: ((SCREEN_HEIGHT * 18) / 100),
        height: ((SCREEN_HEIGHT * 18) / 100),
        backgroundColor: '#ACD472',
        borderRadius: 100,
        bottom: '5%',
        marginLeft: '72%'
    }
});