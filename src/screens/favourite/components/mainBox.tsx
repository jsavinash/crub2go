import * as React from "react";
import { Text, StyleSheet, View, Dimensions } from 'react-native';
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
import { PlaceCard } from '@common_Component';
import { SearchBar } from '@common_Component';
export interface Props {
}

interface State {

}

export class MainBox extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }
    render() {
        return (
            <View style={{
                flex: 1
            }}>
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