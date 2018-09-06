import * as React from "react"
import { StyleSheet, Dimensions, View, Text, TouchableOpacity } from "react-native";
import { Button } from 'react-native-elements';
interface VerificationCardBottomProps {
    onSubmitPress: () => any
}
export const VerificationCardBottom: React.StatelessComponent<VerificationCardBottomProps> = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.containerIn}>
                <Button
                    onPress={() => {
                        props.onSubmitPress()
                    }}
                    title="Submit"
                    buttonStyle={styles.containerInBtnStyle}
                    containerViewStyle={styles.containerInBtnCnt} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 0.8,
        width: '100%',
        height: 20,
        borderRadius: 3,
    },
    containerIn: {
        width: '100%',
        marginLeft: '5%',
        marginTop: '5%',
        right: '-65%'
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
        right: '10%'
    }
});