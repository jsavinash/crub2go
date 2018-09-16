import * as React from "react";
import { View } from 'react-native';
import { styles } from './note-style';
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

