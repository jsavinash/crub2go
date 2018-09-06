import * as React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { VerificationCardContent } from './verificationCardContent';
import { VerificationCardField } from './verificationCardField';
import { VerificationCardBottom } from './verificationCardBottom';
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
export interface Props {
    otp: string,
    mobile: string,
    onTrigger: (isTriggered: boolean) => any
}

interface State {
    isFetchData: boolean,

}

export class VerificationCard extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    onSubmit = () => {
        this.props.onTrigger(true);
    }

    render() {
        return (
            <View style={styles.container}>
                <VerificationCardContent
                    mobile={this.props.mobile}
                />
                <VerificationCardField
                    otp={this.props.otp}
                />
                <VerificationCardBottom
                    onSubmitPress={this.onSubmit} />
            </View>
        )
    }
}
var styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        borderColor: 'black',
        borderRadius: 10,
        width: ((SCREEN_WIDTH * 90) / 100),
        height: ((SCREEN_HEIGHT * 48) / 100),
        backgroundColor: 'white',
    }
});