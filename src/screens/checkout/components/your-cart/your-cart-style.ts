import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },
    margin: {
        marginLeft: '2%',
        marginRight: '2%'
    },
    div1: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '100%',
        borderColor: '#aaa'
    },
    content1: {
        flexDirection: 'column',
        marginTop: '3%',
        marginLeft: '2%',
        marginBottom: '3%',
    },
    content2: {
        marginTop: '3%',
        marginRight: '2%',
        marginBottom: '3%',
    },
    contentTxt: {
        color: 'black',
        fontSize: 14,
    },
    contentTxtMini: {
        color: '#aaa',
        fontSize: 12
    },
    image: {
        height: 35,
        width: 35,
        left: 0
    },
    border: {
        borderBottomWidth: 1,
        borderBottomColor: '#aaa',
        marginBottom: '2%'
    }
});