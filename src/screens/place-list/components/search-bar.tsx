import * as React from "react";
import { View, StyleSheet, Image, TextInput, Dimensions } from 'react-native'
const SCREEN_WIDTH = Dimensions.get('window').width;

export interface SearchBarProps {
    searchTerm: (keyword: string) => any
}

interface SearchBarState {
    keyword: string
}

export class SearchBar extends React.Component<SearchBarProps, SearchBarState> {
    constructor(props: SearchBarProps) {
        super(props);
        this.state = {
            keyword: ''
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={{ marginTop: '3%', marginLeft: '2%' }}>
                    <Image
                        source={require('../../../assets/app-images/search_icon_s_3_h.png')}
                        style={styles.image}
                    ></Image>
                </View>
                <View>
                    <TextInput
                        placeholder="Restaurant or Cuisine or Food .."
                        style={styles.regularTxt}
                        onChangeText={(keyword: string) => {
                            this.setState({ keyword });
                            this.props.searchTerm(keyword)
                        }}
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