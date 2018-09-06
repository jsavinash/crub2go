import * as React from "react";
import { Text, StyleSheet, View, Dimensions } from 'react-native';
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
import { PlaceCard, SearchBar, CountrySelectBar } from '@common_Component';
export interface MainBoxProps {
}

interface MainBoxState {

}

export class MainBox extends React.Component<MainBoxProps, MainBoxState> {
    constructor(props: MainBoxProps) {
        super(props);
    }
    render() {
        return (
            <View style={{
                flex: 1
            }}>
                <CountrySelectBar />
                <SearchBar />
                <PlaceCard />
            </View>
        )
    }
}
var styles = StyleSheet.create({
    container: {
        flex: 1,
        width: ((SCREEN_WIDTH * 55) / 100)
    }
});