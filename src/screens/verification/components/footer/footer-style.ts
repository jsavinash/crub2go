import { StyleSheet, Dimensions } from "react-native";
const SCREEN_WIDTH = Dimensions.get('window').width;

export const styles = StyleSheet.create({
    conatiner: {
        position: 'absolute',
        bottom: 0,
        height: '5%',
        alignSelf:'center'
    },
    div1: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    txt1: {
        marginTop: '1%',
        fontSize: 14,
    },
    txt2: {
        color: '#ACD472',
        marginLeft: '2%',
        fontSize: 18,
    }
});