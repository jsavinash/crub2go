import * as React from "react"
import { View } from "react-native";
import { styles } from './register-card-footer-style'
import { CheckBox } from 'react-native-elements';
import { IRegisterState } from "@models";
interface RegisterCardFooterProps {
    registerParamsAction: (register: IRegisterState) => any,
    registerParams: IRegisterState
}
interface RegisterCardFooterState {
    isAgreed: boolean
}
export class RegisterCardFooter extends React.Component<RegisterCardFooterProps, RegisterCardFooterState> {
    constructor(props: RegisterCardFooterProps) {
        super(props);
        this.state = { isAgreed: false };
    }
    private onCheckChange = () => {
        const { isAgreed } = this.state;
        const { registerParams, registerParamsAction } = this.props;
        const cpyRegisterParams = { ...registerParams };
        this.setState({ isAgreed: !isAgreed })
        cpyRegisterParams['@@err'] = !isAgreed;
        registerParamsAction(cpyRegisterParams)
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.containerIn}>
                    <CheckBox
                        title="I Agree Terms and Conditions?"
                        containerStyle={styles.checkBx}
                        checked={this.state.isAgreed}
                        onPress={() =>
                            this.onCheckChange()
                        }
                    />
                </View>
            </View>
        )
    };
}

