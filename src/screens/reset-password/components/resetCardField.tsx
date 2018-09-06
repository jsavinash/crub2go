import * as React from "react"
import { View, StyleSheet, Image } from "react-native"
import { TextField } from 'react-native-material-textfield';
import {
    ErrTitle,
    ErrPasswordMsg,
    ErrCnfPasswordMsg,
    ErrPassMatch
} from '@constant';
import { showAlert } from '@common_service';

export interface Props {
    textFieldFocus: (text: string) => string,
    isFieldDataFetch: boolean,
    passData: (obj: any, isPassed: boolean) => any
}
interface State {
    isPass: boolean,
    isCnfPass: boolean,
    pass: string,
    cnfPass: string
}
export class ResetCardField extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            isPass: false,
            isCnfPass: false,
            pass: '',
            cnfPass: ''
        };
    }
    componentWillReceiveProps(nextProps: any) {
        const { pass, cnfPass } = this.state;
        if (nextProps.isFieldDataFetch) {
            if (!pass) {
                showAlert(ErrTitle, ErrPasswordMsg, 'danger');
                this.passDataToCard(false);
                return;
            }
            if (!cnfPass) {
                showAlert(ErrTitle, ErrCnfPasswordMsg, 'danger');
                this.passDataToCard(false);
                return;
            }
            if (!(pass === cnfPass)) {
                showAlert(ErrTitle, ErrPassMatch, 'danger');
                this.passDataToCard(false);
                return;
            }
            this.passDataToCard(true);
        }
    }
    passDataToCard = (isPassed: boolean) => {
        this.props.passData({
            pass: this.state.pass,
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
                        <TextField label='Password'
                            baseColor='#aaa'
                            textColor='black'
                            tintColor="#ACD472"
                            lineWidth={2}
                            animationDuration={60}
                            onFocus={() => {
                                this.textFields('Pass');
                                this.setState({ isPass: true });
                            }}
                            onBlur={() => {
                                this.textFields('None');
                                this.setState({ isPass: false });
                            }}
                            onChangeText={(pass: string) => this.setState({ pass })}
                        />
                          <Image
                            source={
                                this.state.isPass ?
                                    require('../../../assets/app-images/activated_eye.png') :
                                    require('../../../assets/app-images/deactivated_eye.png')
                            }
                            style={styles.imageEye}
                        ></Image>
                    </View>
                </View>

                <View style={styles.txtField}>
                    <View style={styles.txtFieldIn}>
                        <TextField label='Confirm Password'
                            baseColor='#aaa'
                            textColor='black'
                            tintColor="#ACD472"
                            lineWidth={2}
                            animationDuration={60}
                            onFocus={() => {
                                this.textFields('CnfPass');
                                this.setState({ isCnfPass: true });
                            }}
                            onBlur={() => {
                                this.textFields('None');
                                this.setState({ isCnfPass: false });
                            }}
                            onChangeText={(cnfPass: string) => this.setState({ cnfPass })}
                        />
                         <Image
                            source={
                                this.state.isCnfPass ?
                                    require('../../../assets/app-images/activated_eye.png') :
                                    require('../../../assets/app-images/deactivated_eye.png')
                            }
                            style={styles.imageEye}
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
        flexDirection: 'row'
    },
    txtFieldIn: {
        width: '100%'
    },
    imageEye: {
        height: 35,
        width: 40,
        position: 'absolute',
        right: 0,
        marginTop: 25
    },
});