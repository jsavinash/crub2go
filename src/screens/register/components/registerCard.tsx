import * as React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { RegisterCardField } from './registerCardField';
import { RegisterCardBottom } from './registerCardBottom';
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
import {
    ErrTitle,
    ErrPolicyMsg
} from '@constant';
import { showAlert } from '@common_service';
export interface RegisterCardProps {
    keyboardHeight: (height: string) => any
    onSubmit: (user: any) => any
}

interface RegisterCardState {
    isFetchData: boolean,
    isAgreed: boolean,
}
export class RegisterCard extends React.Component<RegisterCardProps, RegisterCardState> {
    constructor(props: RegisterCardProps) {
        super(props);
        this.state = {
            isFetchData: false,
            isAgreed: false
        };
    }

    passValue = (txt: string): any => {
        this.props.keyboardHeight(txt);
    }

    passDataToMainContainer = (obj: any, isPassed: boolean) => {
        obj.isAgreed = this.state.isAgreed;
        if (isPassed)
            this.props.onSubmit(obj);
        this.setState({ isFetchData: false });
    };

    onSubmit = (isFetchData: boolean, isAgreed: boolean) => {
        if (isAgreed) {
            this.setState({ isFetchData });
            this.setState({ isAgreed });
        } else{
            showAlert(ErrTitle, ErrPolicyMsg, 'danger');
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <RegisterCardField
                    isFieldDataFetch={this.state.isFetchData}
                    textFieldFocus={this.passValue}
                    passData={this.passDataToMainContainer}
                />
                <RegisterCardBottom
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
        height: ((SCREEN_HEIGHT * 70) / 100),
        backgroundColor: 'white'
    }
});