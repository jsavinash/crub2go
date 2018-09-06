import * as React from "react"
import { View, StyleSheet, Image } from "react-native"
import { TextField } from 'react-native-material-textfield';
import {
    ErrTitle,
    ErrOldPass,
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
    isOld: boolean,
    isNew: boolean,
    isCnf: boolean,
    oldPass?: string,
    newPass?: string,
    cnfPass?: string,
}
export class ChangePasswordCardField extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            isOld: false,
            isNew: false,
            isCnf: false,
            oldPass: '',
            newPass: '',
            cnfPass: ''
        };
    }

    componentWillReceiveProps(nextProps: any) {
        const { oldPass, newPass, cnfPass } = this.state;
        if (nextProps.isFieldDataFetch) {
            if (!oldPass) {
                showAlert(ErrTitle, ErrOldPass, 'danger');
                this.passDataToCard(false);
                return;
            }
            if (!newPass) {
                showAlert(ErrTitle, ErrPasswordMsg, 'danger');
                this.passDataToCard(false);
                return;
            }
            if (!cnfPass) {
                showAlert(ErrTitle, ErrCnfPasswordMsg, 'danger');
                this.passDataToCard(false);
                return;
            }
            if (!(newPass === cnfPass)) {
                showAlert(ErrTitle, ErrPassMatch, 'danger');
                this.passDataToCard(false);
                return;
            }
            this.passDataToCard(true);
        }
    }

    passDataToCard = (isPassed: boolean) => {
        const { oldPass, newPass } = this.state;
        this.props.passData({
            oldPass: oldPass,
            newPass: newPass,
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
                        <TextField label='Old Password'
                            baseColor='#aaa'
                            textColor='black'
                            tintColor="#ACD472"
                            lineWidth={2}
                            animationDuration={60}
                            secureTextEntry={true}
                            onFocus={() => {
                                this.textFields('Old');
                                this.setState({ isOld: true });
                            }}
                            onBlur={() => {
                                this.textFields('None');
                                this.setState({ isOld: false });
                            }}
                            onChangeText={(oldPass: string) => this.setState({ oldPass })}

                        />

                        <Image
                            source={
                                this.state.isOld ?
                                    require('../../../assets/app-images/activated_eye.png') :
                                    require('../../../assets/app-images/deactivated_eye.png')
                            }
                            style={styles.imageEye}
                        ></Image>

                    </View>
                </View>

                <View style={styles.txtField}>
                    <View style={styles.txtFieldIn}>
                        <TextField label='New Password'
                            baseColor='#aaa'
                            textColor='black'
                            tintColor="#ACD472"
                            lineWidth={2}
                            secureTextEntry={true}
                            animationDuration={60}
                            onFocus={() => {
                                this.textFields('New');
                                this.setState({ isNew: true });
                            }}
                            onBlur={() => {
                                this.textFields('None');
                                this.setState({ isNew: false });
                            }}
                            onChangeText={(newPass: string) => this.setState({ newPass })} />
                        <Image
                            source={
                                this.state.isNew ?
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
                            secureTextEntry={true}
                            animationDuration={60}
                            onFocus={() => {
                                this.textFields('Cnf');
                                this.setState({ isCnf: true });
                            }}
                            onBlur={() => {
                                this.textFields('None');
                                this.setState({ isCnf: false });
                            }}
                            onChangeText={(cnfPass: string) => this.setState({ cnfPass })}
                        />
                        <Image
                            source={
                                this.state.isCnf ?
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