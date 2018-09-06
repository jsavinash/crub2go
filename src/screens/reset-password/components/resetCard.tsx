import * as React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { ResetCardContent } from './resetCardContent';
import { ResetCardField } from './resetCardField';
import { ResetCardBottom } from './resetCardBottom';
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
export interface Props {
    keyboardHeight: (height: string) => any,
    nav: any,
    onSubmit: (user: any) => any
}

interface State {
    isFetchData: boolean

}

export class ResetCard extends React.Component<Props, State> {
    constructor(props: Props) {
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
                <ResetCardContent />
                <ResetCardField 
                
                isFieldDataFetch={this.state.isFetchData}
                textFieldFocus={this.passValue}
                passData={this.passDataToMainContainer}
                />
                <ResetCardBottom 
                naviagation={this.props.nav}
                onSubmitPress={this.onSubmit}/>
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