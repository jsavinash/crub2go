import * as React from "react";
import FAB from 'react-native-fab';
import Icon from 'react-native-vector-icons/FontAwesome';
import call from 'react-native-phone-call'

export interface callProps {
    selectedOrderDetail: any
}
export const Call: React.StatelessComponent<callProps> = (props) => {

    const makeACall = () => {
        const { selectedOrderDetail } = props;
        console.log('selectedOrderDetail call', selectedOrderDetail);
        const args = {
            number: selectedOrderDetail['restaurant_mobile_number'], // String value with the number to call
            prompt: true // Optional boolean property. Determines if the user should be prompt prior to the call 
        }
        call(args).catch(console.error)
    }
    return (
        <FAB buttonColor="#ACD472" iconTextColor="#FFFFFF" onClickAction={() => { makeACall(); }} visible={true} iconTextComponent={<Icon name="phone" />} />
    )
}

