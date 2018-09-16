import * as React from "react";
import { View } from 'react-native';
import * as _ from 'lodash';
import { styles } from './note-style';
import { TextField } from 'react-native-material-textfield';
export interface NoteProps {
    checkoutParamsAction: (checkout: any) => any,
    checkoutParams: any
}
export const Note: React.StatelessComponent<NoteProps> = (props) => {
    const textChange = (note: string) => {
        const { checkoutParamsAction, checkoutParams } = props;
        const cpyCheckoutParams = { ...checkoutParams };
        cpyCheckoutParams['order_note'] = note;
        checkoutParamsAction(cpyCheckoutParams)
    }
    return (
        <View style={styles.container}>
            <View style={styles.txtField}>
                <View style={styles.txtFieldIn}>
                    <TextField label='Enter any note'
                        baseColor='#aaa'
                        textColor='black'
                        tintColor="#ACD472"
                        lineWidth={1}
                        animationDuration={60}
                        secureTextEntry={false}
                        onChangeText={(note: string) => textChange(note)}
                    />
                </View>
            </View>
        </View>
    )
}

