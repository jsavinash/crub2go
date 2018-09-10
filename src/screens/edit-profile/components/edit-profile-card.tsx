import * as React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { EditProfileField } from './edit-profile-field';
import { EditProfileBottom } from './edit-profile-bottom';
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

export interface EditProfileCardProps {
    onSubmit: (user: any) => any,
    customer: any
}

interface EditProfileCardState {
    isFetchData: boolean,
    isAgreed: boolean,
}

export class EditProfileCard extends React.Component<EditProfileCardProps, EditProfileCardState> {
    constructor(props: EditProfileCardProps) {
        super(props);
        this.state = {
            isFetchData: false,
            isAgreed: false
        };
    }
    passDataToMainContainer = (obj: any, isPassed: boolean) => {
        obj.isAgreed = this.state.isAgreed;
        if (isPassed)
            this.props.onSubmit(obj);
        this.setState({ isFetchData: false });
    };
    onSubmit = (isFetchData: boolean) => {
        this.setState({ isFetchData });
    }
    render() {
        return (
            <View style={styles.container}>
                <EditProfileField
                customer={this.props.customer}
                    isFieldDataFetch={this.state.isFetchData}
                    passData={this.passDataToMainContainer}
                />
                <EditProfileBottom
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
        height: ((SCREEN_HEIGHT * 25) / 100),
        backgroundColor: 'white'
    }
});