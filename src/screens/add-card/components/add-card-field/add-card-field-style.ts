import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    container: {
        flex: 0.7,
        margin: 14,
    },
    image: {
        height: '40%',
        width: '10%',
    },
    image1: {
        height: '30%',
        width: '15%',
        position: 'absolute',
        left: 3,
        bottom: '15%'
    },
    txtField: {
        flexDirection: 'column',
    },
    txtField12: {
        flexDirection: 'row',
    },
    txtFieldIn: {
        width: '100%'
    },
    txtField1: {
        flexDirection: 'row',
        marginLeft: '2%',
        width: '50%'
    },
    txtFieldIn1: {
        width: '100%'
    },
    div1: {
        alignSelf: 'center'
    },
    image2: {
        height: 30,
        width: 30,
    },
    borderActive: {
        borderBottomWidth: 2,
        borderBottomColor: '#ACD472'
    },
    borderInactive: {
        borderBottomWidth: 2,
        borderBottomColor: '#aaa'
    },
    div2: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    div3: {
        width: "48%"
    }
});