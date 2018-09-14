import * as React from "react";
import { StyleSheet, View, Text, Image } from 'react-native';
import { TextField } from 'react-native-material-textfield';

export interface NoteProps {
}
export const Note: React.StatelessComponent<NoteProps> = (props) => {
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
                    />
                </View>
            </View>
        </View>
    )
}

var styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '100%'
    },
    txtField: {
        flexDirection: 'row',
        marginLeft: '5%',
        marginRight: '5%'
    },
    txtFieldIn: {
        width: '100%'
    },
    containerInBtnStyle: {
        backgroundColor: '#ACD472',
        borderColor: 'transparent',
        borderWidth: 1,
        borderRadius: 30,
    },
    containerInBtnCnt: {
        width: '100%',
    }
});