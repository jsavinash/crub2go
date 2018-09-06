import * as React from "react"
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Button } from 'react-native-elements';
interface LoginCardBottomProps {
    nav: any,
    onSubmitPress: (obj: any) => any
}
export const LoginCardBottom: React.StatelessComponent<LoginCardBottomProps> = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.containerIn}>
                <TouchableOpacity style={styles.txtTouch}
                    onPress={() => { props.nav.navigate('ForgotPassword') }}>
                    <Text style={styles.containerInTxt}>Forgot Password?</Text>
                </TouchableOpacity>
                <Button
                    onPress={() => { props.onSubmitPress(true) }}
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
        marginLeft: '25%',
        alignSelf: 'flex-end'
    }
});