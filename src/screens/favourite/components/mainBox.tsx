import * as React from "react";
import { Text, StyleSheet, View, Dimensions, ScrollView, Image, TouchableOpacity, TouchableHighlight } from 'react-native';
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
import { IRestaurants } from '@models';
export interface MainBoxProps {
    navigation: any,
    favRestaurants: IRestaurants[]
}
interface MainBoxState {

}
export class MainBox extends React.Component<MainBoxProps, MainBoxState> {
    constructor(props: MainBoxProps) {
        super(props);
    }



    public navigateTo = () => {
        this.props.navigation.navigate('City');
    }


    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={{
                        backgroundColor: 'white',
                    }}>
                        {this.props.favRestaurants.map((restaurant, idx) => {
                            return (
                                <View style={{
                                    flex: 1,
                                    marginBottom: 10,
                                }} key={idx}>
                                    <Image
                                        source={{ uri: restaurant.restaurant_image }}
                                        style={{
                                            width: SCREEN_WIDTH,
                                            height: ((SCREEN_HEIGHT * 35) / 100)
                                        }} />
                                    <TouchableHighlight
                                        style={{
                                            marginTop: 4,
                                            right: 4,
                                            position: 'absolute'
                                        }}
                                        onPress={() => { this.favorite(restaurant) }}>
                                        <Image
                                            source={require('../../../assets/app-images/heart-outline.png')}
                                            style={{
                                                height: 30,
                                                width: 30

                                            }}
                                        />
                                    </TouchableHighlight>
                                    <View style={{
                                        width: SCREEN_WIDTH,
                                        height: ((SCREEN_HEIGHT * 10) / 100),
                                        backgroundColor: 'white',
                                        borderBottomWidth: 2,
                                    }}>
                                        <View style={styles.scrollContainer}>
                                            <Text style={styles.content1left}>{restaurant.restaurant_name}</Text>
                                            <Text style={styles.content1right}>Rating</Text>
                                        </View>
                                        <View style={styles.scrollContainer}>
                                            <Text style={styles.content2left}>{restaurant.restaurant_distance} Miles away</Text>
                                            <Text style={styles.content2right}>{restaurant.restaurant_rating}</Text>
                                        </View>
                                    </View>
                                </View>
                            )
                        })}
                    </View>
                </ScrollView>
            </View>
        )
    }
}
var styles = StyleSheet.create({
    container: {
        flex: 1
    },
    div1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        backgroundColor: 'white',
        height: '8%',
        borderBottomColor: '#aaa',
        borderBottomWidth: 1
    },
    div2: {
        marginTop: '2%',
        marginLeft: '5%'
    },
    div3: {
        marginTop: '2%',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        marginLeft: 0
    },
    div3Txt1: {
        fontSize: 14,
        color: '#ACD472'
    },
    div3Txt2: {
        color: 'black',
        fontSize: 16,
        fontWeight: '600'
    },
    scrollContainer: {
        marginTop: '2%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    content1left: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        color: 'black',
        fontSize: 16,
        marginLeft: '2%'
    },
    content1right: {
        marginRight: "2%"
    },
    content2left: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginLeft: '2%'
    },
    content2right: {
        marginRight: "5%"
    }
});