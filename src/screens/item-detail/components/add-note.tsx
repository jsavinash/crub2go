import * as React from "react";
import { StyleSheet, View, TextInput } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export interface AddNoteProps {
}

interface AddNoteState {

}
export class AddNote extends React.Component<AddNoteProps, AddNoteState> {
    constructor(props: AddNoteProps) {
        super(props);
    }
    render() {
        return (
            <View style={styles.container}>
                <KeyboardAwareScrollView>
                    <View>
                        <TextInput
                            placeholder="Add a note (extra sauce, no onions, etc.)"
                            style={styles.txt} />
                        <View style={styles.border}></View>
                    </View>
                </KeyboardAwareScrollView>
            </View>
        )
    }
}

var styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '15%',
        backgroundColor: 'white'
    },
    txt: {
        marginTop: '3%',
        left: '2%',
        fontSize: 16,
        color: 'black'
    },
    border: {
        borderBottomColor: '#aaa',
        borderBottomWidth: 1
    }
});