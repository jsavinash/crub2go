import * as React from "react"
import { StyleSheet, Dimensions, View, Text, TouchableOpacity } from "react-native";
import { Button } from 'react-native-elements';
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
interface Props {
}
export const SuccessCardBottom: React.StatelessComponent<Props> = (props) => {
    const submitLoginCredentials = () => {

    }
    return (
        <View style={styles.container}>
            <View style={styles.containerIn}>
                <Button
                    onPress={submitLoginCredentials}
                    title="Submit"
                    buttonStyle={styles.containerInBtnStyle}
                    containerViewStyle={styles.containerInBtnCnt} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 0.4,
        width: '100%',
        height: 20,
    },
    containerIn: {
        width: '100%',
        flexDirection: 'row',
        marginLeft: '5%',
        marginTop: '5%'
    },
    txtTouch: {
        marginTop: '1%',
    },
    containerInTxt: {
        alignSelf: 'flex-start',
    },
    containerInBtnStyle: {
        backgroundColor: '#ACD472',
        borderColor: 'transparent',
        borderWidth: 1,
        borderRadius: 30
    },
    containerInBtnCnt: {
        width: '30%',
        marginLeft: '25%',
        right: '-30%',
        alignSelf: 'flex-end'
    }
});