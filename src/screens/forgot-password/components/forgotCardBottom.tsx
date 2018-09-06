import * as React from "react"
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Button } from 'react-native-elements';
interface ForgotCardBottomProps {
    naviagation: any,
    onSubmitPress: (isPress: boolean) => any
}
export const ForgotCardBottom: React.StatelessComponent<ForgotCardBottomProps> = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.containerIn}>
                <TouchableOpacity style={styles.txtTouch}
                    onPress={() => { props.naviagation.navigate('Login'); }}>
                    <Text style={styles.containerInTxt}>Remembered Password?</Text>
                </TouchableOpacity>
                
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
        flex: 0.8,
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
        marginLeft: '10%',
        alignSelf: 'flex-end'
    }
});