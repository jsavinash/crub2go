import * as React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';

export interface PickUpProps {
}

export interface PickUpState {
    isDateTimePickerVisible: boolean
}

export class PickUp extends React.Component<PickUpProps, PickUpState> {
    constructor(props: PickUpProps) {
        super(props);
        this.state = {
            isDateTimePickerVisible: false
        }
    }
    _showDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: true });
    }

    _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

    _handleDatePicked = (date: any) => {
        console.log('A date has been picked: ', date);
        this._hideDateTimePicker();
    };

    render() {
        return (
            <View style={styles.container} >
                <View style={styles.txtField}>
                    <View style={{
                        alignSelf: 'center'
                    }}>
                        <Text style={styles.txt1}>Select Time</Text>
                    </View>
                    <TouchableOpacity onPress={() => {
                        this._showDateTimePicker();
                    }} style={{
                        width: '100%',
                    }}>
                        <View style={styles.txtFieldIn}>
                            <Text
                                style={{
                                    marginTop: '10%'
                                }}>HH:MM</Text>

                            <View style={styles.div1}>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <DateTimePicker
                    mode={'time'}
                    is24Hour={false}
                    isVisible={this.state.isDateTimePickerVisible}
                    onConfirm={this._handleDatePicked}
                    onCancel={this._hideDateTimePicker}
                />
            </View>
        )
    }
}

var styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '100%'
    },
    txtField: {
        flexDirection: 'row',
        marginBottom: '5%',
        marginLeft: '5%',
        marginRight: '5%'

    },
    txtFieldIn: {
        flexDirection: 'column'
    },
    containerInBtnStyle: {
        backgroundColor: '#ACD472',
        borderColor: 'transparent',
        borderWidth: 1,
        borderRadius: 30,
    },
    containerInBtnCnt: {
        width: '100%',
    },
    txt1: {
        marginRight: '5%',
        fontSize: 16,
        color: 'black',
        fontWeight: '400'
    },
    div1: {
        borderBottomColor: '#aaa',
        borderBottomWidth: 1,
        marginTop: '1%'
    }
});