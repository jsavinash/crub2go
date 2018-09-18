import { StyleSheet, Dimensions } from "react-native";
const SCREEN_HEIGHT = Dimensions.get('window').height;

export const styles = StyleSheet.create({
    container: {
        width: '100%',

        },
    containerIn: {
        width: '100%',
        flexDirection: 'row',
        marginLeft: '5%',
    },
    txtTouch: {
    },
    containerInTxt: {
        alignSelf: 'flex-start',
        fontSize: 15
    },
    // containerInBtnStyle: {
    //     backgroundColor: '#ACD472',
    //     borderColor: 'transparent',
    //     borderWidth: 1,
    //     borderRadius: 30
    // },
    containerInBtnCnt: {
        width: '30%',
        marginLeft: '25%',
        alignSelf: 'flex-end'
    }
});