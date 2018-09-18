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
        flexDirection: 'column'
    },
    txt1: {
        color: 'black',
        fontSize: 14,
    },

    txt2: {
        color: '#aaa',
        fontSize: 12
    },
    txt3: {
        color: '#aaa',
        fontSize: 12,
        marginLeft: '2%'
    },
    txt4: {
        color: '#aaa',
        fontSize: 14,
        alignSelf: 'flex-end'
    },
    txt5: {
        color: '#aaa',
        fontSize: 16,
    },
    txt6: {
        color: 'black',
        fontSize: 16,
        marginLeft: '3%'
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