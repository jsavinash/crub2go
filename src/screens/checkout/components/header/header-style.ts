import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        backgroundColor: '#ACD472',
        borderBottomWidth: 2,
        borderTopWidth: 1,
        borderColor: '#cdcdcd'
    },
    imageContent: {
        marginTop: '8%',
        marginLeft: '4%',
        marginBottom: '8%'
    },
    image: {
        height: 15,
        width: 15,
        left: 0
    },
    textContent: {
        marginTop: '4%',
        marginBottom: '4%'
    },
    contentTxt1: {
        color: 'white',
        fontSize: 18,
        fontWeight: '500',
        marginLeft: '45%',
    },
    contentTxt2: {
        color: 'white',
        fontSize: 14,
        marginLeft: '38%',
    }

});