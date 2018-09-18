import * as React from "react"
import { View, StyleSheet, Image } from "react-native"
import { TextField } from 'react-native-material-textfield';
import { showAlert, logger } from '@common_service';
import { Images } from "@themes";
import {
    ErrTitle,
    ErrMobileOrEmailMsg,
    ErrPasswordMsg
} from '@constant';

export interface Props {
    textFieldFocus: (text: string) => string,
    isFieldDataFetch: boolean,
    passData: (obj: any, isPassed: boolean) => any
}

interface State {
    userId: string,
    password: string,
    isUserId: boolean,
    isPassword: boolean
}

export class LoginCardField extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            isUserId: false,
            isPassword: false,
            userId: '',
            password: ''
        };
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
                            onChangeText={(userId: string) => this.setState({ userId })}
                            onFocus={() => {
                                this.setState({ isUserId: true });
                            }}
                            onBlur={() => {
                                this.setState({ isUserId: false });
                            }}
                        />
                        <Image
                            source={
                                this.state['isUserId'] ?
                                    Images.USER_ACTIVE
                                    :
                                    Images.USER_INACTIVE
                            }
                            style={styles.image}
                        ></Image>
                    </View>
                </View>
                <View style={styles.txtField}>
                    <View style={styles.txtFieldIn}>
                        <TextField label='Password'
                            baseColor='#aaa'
                            textColor='black'
                            tintColor="#ACD472"
                            lineWidth={2}
                            animationDuration={60}
                            secureTextEntry={true}
                            onChangeText={(password: string) => this.setState({ password })}
                            onFocus={() => {
                                this.setState({ isPassword: true });
                            }}
                            onBlur={() => {
                                this.setState({ isPassword: false });
                            }}
                        />
                        <Image
                            source={
                                this.state['isPassword'] ?
                                    Images.EYE_ACTIVE
                                    :
                                    Images.EYE_INACTIVE
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
        flex: 0.8,
        margin: 14,
    },
    image: {
        height: 35,
        width: 38,
        position: 'absolute',
        right: 0,
        marginTop: 28,
    },
    imageEye: {
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
    }
});