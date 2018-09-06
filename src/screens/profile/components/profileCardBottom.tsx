import * as React from "react"
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Button } from 'react-native-elements';
interface Props {
}
export const ProfileCardBottom: React.StatelessComponent<Props> = (props) => {
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
        flex: 0.3,
        width: '100%',
        height: 20,
    },
    containerIn: {
        width: '100%',
        flexDirection: 'row',
        marginLeft: '5%',
        marginTop: '5%',
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
        borderRadius: 30,
    },
    containerInBtnCnt: {
        width: '30%',
        marginLeft: 100,
        alignSelf: 'flex-end'
    }
});