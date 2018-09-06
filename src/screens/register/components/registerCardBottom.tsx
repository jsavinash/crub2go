import * as React from "react"
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Icon, CheckBox } from 'react-native-elements';
interface RegisterCardBottomProps {
    onSubmitPress: (isPress: boolean, isAgreed: boolean) => any
}
interface RegisterCardBottomState {
    isAgreed: boolean
}
export class RegisterCardBottom extends React.Component<RegisterCardBottomProps, RegisterCardBottomState> {
    constructor(props: RegisterCardBottomProps) {
        super(props);
        this.state = { isAgreed: false };
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.containerIn}>
                    <CheckBox
                        title="I Agree Terms and Conditions?"
                        containerStyle={styles.checkBx}
                        checked={this.state.isAgreed}
                        onPress={() => this.setState({ isAgreed: !this.state.isAgreed })}
                    />
                    <TouchableOpacity
                        style={styles.btnTch}
                        onPress={() => { 
                            this.props.onSubmitPress(true, this.state.isAgreed)
                           }}>
                        <Icon name={"chevron-right"} size={80} color="white" />
                    </TouchableOpacity>
                </View>
                
            </View>
        )
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 0.1,
        width: '100%',
        height: 20,
    },
    containerIn: {
        width: '100%',
        flexDirection: 'row',
        marginTop: '2%'
    },

    checkBx: {
        backgroundColor: 'white',
        borderWidth: 0,
        marginLeft: 0,
        height: '40%',
        width: '73%'
    },
    btnTch: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 70,
        height: 70,
        backgroundColor: '#ACD472',
        borderRadius: 100,
        marginLeft: 0
    }
});