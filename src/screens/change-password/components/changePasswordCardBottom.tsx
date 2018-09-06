import * as React from "react"
import { StyleSheet, View } from "react-native";
import { Button } from 'react-native-elements';
interface ChangePasswordCardBottomProps {
    naviagation: any,
    onSubmitPress: (isPress: boolean) => any

}
export const ChangePasswordCardBottom: React.StatelessComponent<ChangePasswordCardBottomProps> = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.containerIn}>
                <Button
                    onPress={() => {
                        props.onSubmitPress(true)
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
        flex: 0.2,
        width: '100%',
        height: 20,
    },
    containerIn: {
        width: '100%',
        marginLeft: '5%',
        marginTop: '10%',
        right: '6%'
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
        marginLeft: '10%',
        alignSelf: 'flex-end',


    }
});