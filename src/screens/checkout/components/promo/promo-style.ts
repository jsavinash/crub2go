import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: 'white'
    },
    margin: {
        marginLeft: '4%',
        marginRight: '4%',
        marginTop: '4%'
    },
    rowContent: {
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    content: {
        marginTop: '2%',
        marginLeft: '2%',
        flexDirection: 'column'
    },
    contentTxt1: {
        color: '#dcdcdc',
        fontSize: 12
    },
    contentTxt2: {
        color: 'black',
        fontSize: 14
    },
    containerInBtnStyle: {
        backgroundColor: '#ACD472',
        borderColor: 'transparent',
        borderWidth: 1,
        borderRadius: 30
    },
    containerInBtnCnt: {
        width: '80%'
    },
    border: {
        marginTop: '4%',
        borderBottomColor: '#aaa',
        borderBottomWidth: 1,
        marginBottom: '4%'
    }
});