import { StyleSheet, Dimensions } from 'react-native';
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

export const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },
    card: {
        flex: 1,
        marginBottom: 10,
    },
    image: {
        width: SCREEN_WIDTH,
        height: ((SCREEN_HEIGHT * 25) / 100)
    },
    tchImg: {
        marginTop: 4,
        right: 4,
        position: 'absolute'
    },
    tchImgDim: {
        height: 30,
        width: 30
    },
    content: {
        width: SCREEN_WIDTH,
        height: ((SCREEN_HEIGHT * 10) / 100),
        backgroundColor: 'white',
        borderBottomWidth: 2,
    },
    scrollContainer: {
        marginTop: '1%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    content1left: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        color: 'black',
        fontSize: 16,
        marginLeft: '2%'
    },
    content1right: {
        marginRight: "2%",

    },
    content2left: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginLeft: '2%',
        fontSize: 16
    },
    content2right: {
        marginRight: "5%",
        fontSize: 18,
        color: '#ACD472'
    }

});