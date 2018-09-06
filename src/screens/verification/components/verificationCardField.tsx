import * as React from "react"
import { View, StyleSheet, Text, TouchableOpacity } from "react-native"
import CodeInput from 'react-native-confirmation-code-input';

export interface Props {
    otp: string
}
interface State {

}
export class VerificationCardField extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }
    onSubmit = (code: any) => {
        console.log('code', code);
    }

    initCode = (otp: string) => {
        let otpArray = otp.split("");
        for (var i = 0; i < this.refs.codeInput.codeInputRefs.length; i++) {
            this.refs.codeInput.codeInputRefs[i].setNativeProps({ 'text': `${otpArray[i]}` });
        }
    }

    componentWillReceiveProps(nextProps: any) {
        if (nextProps.otp) {
            this.initCode(nextProps.otp);
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.codeTxt}>Verification code</Text>
                <CodeInput
                    ref="codeInput"
                    //  secureTextEntry
                    compareWithCode='AsDW'
                    activeColor='rgba(49, 180, 4, 1)'
                    inactiveColor='#aaa'
                    autoFocus={false}
                    ignoreCase={true}
                    inputPosition='center'
                    size={60}
                    codeLength={4}
                    onFulfill={(code: any) => this.onSubmit(code)}
                    containerStyle={{ marginTop: 30 }}
                    codeInputStyle={{
                        borderWidth: 1.5,
                        borderRadius: 20
                    }}
                />
            </View>
        )
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 0.7,
        margin: 14,
    },
    image: {
        height: 35,
        width: 40,
        position: 'absolute',
        right: 0,
        marginTop: 25
    },
    txtField: {
        marginTop: '15%',

        flexDirection: 'row'
    },
    txtFieldIn: {
        width: '100%'
    },
    codeTxt: {
        color: '#31B404',
        fontSize: 18,
        fontWeight: '800',
        textAlign: 'center'
    },
});