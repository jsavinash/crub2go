import * as React from "react";
import { View, Image } from "react-native";
import { styles } from './forgot-card-field-style';
import { TextField } from 'react-native-material-textfield';
import { Images } from '@themes';
import { IForgotPasswordState } from "@models";
export interface ForgotCardFieldProps {
    forgotParamsAction: (login: IForgotPasswordState) => any,
    forgotParams: IForgotPasswordState
}
interface ForgotCardFieldState {
    isMobile: boolean
}
export class ForgotCardField extends React.Component<ForgotCardFieldProps, ForgotCardFieldState> {
    constructor(props: ForgotCardFieldProps) {
        super(props);
        this.state = {
            isMobile: false
        };
    }
    private onMobileChange = (mobile_number: string) => {
        const { forgotParams, forgotParamsAction } = this.props;
        const cpyForgotParams = { ...forgotParams };
        cpyForgotParams['mobile_number'] = mobile_number;
        forgotParamsAction(cpyForgotParams)
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.txtField}>
                    <View style={styles.txtFieldIn}>
                        <TextField label='Enter Mobile'
                            baseColor='#aaa'
                            textColor='black'
                            tintColor="#ACD472"
                            lineWidth={2}
                            animationDuration={60}
                            onFocus={() => {
                                this.setState({ isMobile: true });
                            }}
                            onBlur={() => {
                                this.setState({ isMobile: false });
                            }}
                            onChangeText={(mobile: string) => this.onMobileChange(mobile)}
                        />
                        <Image
                            source={
                                this.state['isMobile'] ?
                                    Images.MOBILE_ACTIVE :
                                    Images.MOBILE_INACTIVE
                            }
                            style={styles.image}
                        ></Image>
                    </View>
                </View>
            </View>
        )
    }
}
