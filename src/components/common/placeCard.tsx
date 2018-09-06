import * as React from "react";
import { Text, View, StyleSheet, Dimensions, ScrollView } from 'react-native'
import { Card } from 'react-native-elements';
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

export interface PlaceCardProps {
}

interface PlaceCardState {


}

export class PlaceCard extends React.Component<PlaceCardProps, PlaceCardState> {
    constructor(props: PlaceCardProps) {
        super(props);
    }
    render() {
        return (
            <View>
                <ScrollView>
                    <Card
                        containerStyle={styles.container}
                        title='Brand'
                        image={require('../../assets/hotels/Brand.jpeg')} >
                        <Text style={{ marginBottom: 10 }}>
                            The idea with React Native Elements is more about component structure than actual design.
                </Text>
                    </Card>
                    <Card
                        containerStyle={styles.container}
                        title='Brand'
                        image={require('../../assets/hotels/Brand.jpeg')} >
                        <Text style={{ marginBottom: 10 }}>
                            The idea with React Native Elements is more about component structure than actual design.
                </Text>
                    </Card>
                    <Card
                        containerStyle={styles.container}
                        title='Brand'
                        image={require('../../assets/hotels/Brand.jpeg')} >
                        <Text style={{ marginBottom: 10 }}>
                            The idea with React Native Elements is more about component structure than actual design.
                </Text>
                    </Card>
                </ScrollView>
            </View>
        )
    }
}
var styles = StyleSheet.create({
    container: {
        marginTop: 0,
        marginLeft: 0,
        width: SCREEN_WIDTH,
        height: ((SCREEN_HEIGHT * 40) / 100)
    }
});