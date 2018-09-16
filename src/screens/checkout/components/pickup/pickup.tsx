import * as React from "react";
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './pickup-style';
import moment from 'moment';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { OrderRestService } from '../../../../services';
import { transformToFromData } from '@common_service';
import { ITimeCheckParams } from '@models';
export interface PickUpProps {
    token: any,
    resturantId: any
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
        const { token, resturantId } = this.props;
        let time12 = moment(date).format('hh:mm');
        let time24 = moment(date).format('HH:mm');
        let params: ITimeCheckParams = {
            pickup_time: time24,
            restaurant_id: resturantId
        }
        OrderRestService.checkPickUpTime(transformToFromData(params), token).then((time: any) => {
            console.log("time", time);
        }).catch((error) => {

        })
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

