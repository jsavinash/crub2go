import * as React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { ForgotCardContent } from './forgotCardContent';
import { ForgotCardField } from './forgotCardField';
import { ForgotCardBottom } from './forgotCardBottom';
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
export interface ForgotCardProps {
    keyboardHeight: (height: string) => any,
    nav: any,
    onSubmit: (user: any) => any
}

interface ForgotCardState {
    isFetchData: boolean

}

export class ForgotCard extends React.Component<ForgotCardProps, ForgotCardState> {
    constructor(props: ForgotCardProps) {
        super(props);
        this.state = { isFetchData: false };
    }
    passValue = (txt: string): any => {
        this.props.keyboardHeight(txt);
    }
    passDataToMainContainer = (obj: any, isPassed: boolean) => {
        this.setState({ isFetchData: false });
        if (isPassed) {
            this.props.onSubmit(obj);
        }
    };

    onSubmit = (isFetchData: boolean) => {
        this.setState({ isFetchData });
    }

    render() {
        return (
            <View style={styles.container}>
                <ForgotCardContent />
                <ForgotCardField
                    isFieldDataFetch={this.state.isFetchData}
                    textFieldFocus={this.passValue}
                    passData={this.passDataToMainContainer}

                />
                <ForgotCardBottom
                    naviagation={this.props.nav}
                    onSubmitPress={this.onSubmit}
                />
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