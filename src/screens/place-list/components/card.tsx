import * as React from "react";
import { View, StyleSheet, Text, Image, TouchableHighlight, ScrollView, Dimensions } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

export interface CardProps {
    navigation: any,
    restaurants: any
}

interface CardState {

}
export class Card extends React.Component<CardProps, CardState> {
    constructor(props: CardProps) {
        super(props);
    }

    public navigateTo = () => {
        this.props.navigation.navigate('City');
    }

    render() {
        return (
            <ScrollView
                pagingEnabled={true}
            >
                <View style={styles.container}>
                    {this.props.restaurants.map((restaurant: any, idx: any) => {
                        return (
                            <View style={styles.card} key={idx}>
                                <Image
                                    source={{ uri: restaurant.restaurant_image }}
                                    style={styles.image} />
                                <TouchableHighlight
                                    style={styles.tchImg}
                                // onPress={() => { this.favorite(restaurant) }}
                                >
                                    <Image
                                        source={require('../../../assets/app-images/heart-outline.png')}
                                        style={styles.tchImgDim}
                                    />
                                </TouchableHighlight>
                                <View style={styles.content}>
                                    <View style={styles.scrollContainer}>
                                        <Text style={styles.content1left}>{restaurant.restaurant_name}</Text>
                                        <Text style={styles.content1right}>Ratings</Text>
                                    </View>
                                    <View style={styles.scrollContainer}>
                                        <Text style={styles.content2left}>{restaurant.restaurant_distance} 5 Miles away</Text>
                                        <Text style={styles.content2right}>{restaurant.restaurant_rating}</Text>
                                    </View>
                                </View>
                            </View>
                        )
                    })}
                </View>
            </ScrollView>
        )
    }
}
var styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },
    card: {
        flex: 1,
        marginBottom: 10,
    },
    image: {
        width: SCREEN_WIDTH,
        height: ((SCREEN_HEIGHT * 35) / 100)
    },
    tchImg: {
        marginTop: 4,
        right: 4,
        position: 'absolute'
    },
    tchImgDim: {
        height: 30,
        width: 30
    },
    content: {
        width: SCREEN_WIDTH,
        height: ((SCREEN_HEIGHT * 10) / 100),
        backgroundColor: 'white',
        borderBottomWidth: 2,
    },
    scrollContainer: {
        marginTop: '1%',
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
        marginRight: "5%",
        fontSize: 20,
        color: '#ACD472'
    }

});