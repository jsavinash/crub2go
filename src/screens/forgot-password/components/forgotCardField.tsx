import * as React from "react"
import { View, StyleSheet, Image } from "react-native"
import { TextField } from 'react-native-material-textfield';
import { showAlert } from '@common_service';
import {
    ErrTitle,
    ErrMobileMsg,
    ErrMobileValidMsg
} from '@constant';
export interface ForgotCardFieldProps {
    textFieldFocus: (text: string) => string,
    isFieldDataFetch: boolean,
    passData: (obj: any, isPassed: boolean) => any

}
interface ForgotCardFieldState {
    isMobile: boolean,
    mobile: string

}
export class ForgotCardField extends React.Component<ForgotCardFieldProps, ForgotCardFieldState> {
    constructor(props: ForgotCardFieldProps) {
        super(props);
        this.state = {
            isMobile: false,
            mobile: ''
        };
    }

    componentWillReceiveProps(nextProps: any) {
        if (nextProps.isFieldDataFetch) {
            const { mobile } = this.state;
            if (!mobile) {
                showAlert(ErrTitle, ErrMobileMsg, 'danger');
                this.passDataToCard(false);
                return;
            } else if (!(/^[0-9]{10,13}$/.test(mobile))) {
                showAlert(ErrTitle, ErrMobileValidMsg, 'danger');
                this.passDataToCard(false);
                return;
            }
            this.passDataToCard(true);
        }
    }
    passDataToCard = (isPassed: boolean) => {
        this.props.passData({
            mobile: this.state.mobile,
        }, isPassed);
    }

    textFields = (textField: string) => {
        this.props.textFieldFocus(textField);
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
                                this.textFields('Mobile');
                                this.setState({ isMobile: true });
                            }}
                            onBlur={() => {
                                this.textFields('None');
                                this.setState({ isMobile: false });
                            }}
                            onChangeText={(mobile: string) => this.setState({ mobile })}
                        />
                        <Image
                            source={
                                this.state.isMobile ?
                                    require('../../../assets/app-images/mobile_active.png') :
                                    require('../../../assets/app-images/mobile_deactive.png')
                            }
                            style={styles.image}
                        ></Image>
                    </View>
                </View>
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
    }
});