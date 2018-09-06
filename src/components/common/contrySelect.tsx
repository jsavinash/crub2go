import * as React from "react";
import { View, StyleSheet, Image, TextInput, Dimensions } from 'react-native'
const SCREEN_WIDTH = Dimensions.get('window').width;

export interface CountrySelectBarProps {
}

interface CountrySelectBarState {

}

export class CountrySelectBar extends React.Component<CountrySelectBarProps, CountrySelectBarState> {
    constructor(props: CountrySelectBarProps) {
        super(props);
    }
    render() {
        return (

            <View style={styles.container}>
                <View style={{ marginTop: '3%', marginLeft: '2%' }}>
                    <Image
                        source={require('../../assets/app-images/search_icon_s_3.png')}
                        style={styles.image}
                    ></Image>
                </View>
                <View>
                    <TextInput
                        placeholder="Search Here"
                        style={styles.regularTxt}
                    />
                </View>
            </View>
        )
    }
}
var styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: '8.2%',
        width: '100%',
        backgroundColor: 'white'
    },
    image: {
        height: 35,
        width: 35,
        position: 'absolute',
        left: 0
    },
    regularTxt: {
        width: ((SCREEN_WIDTH * 90) / 100),
        marginLeft: 30,
        marginTop: '4%',
        fontSize: 15,
        color: '#9b9b9b'
    }
});