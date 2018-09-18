import * as React from "react";
import { View, StyleSheet, Text, Image, TouchableHighlight, TouchableOpacity, ScrollView, Dimensions } from 'react-native'
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
import ImageOverlay from "react-native-image-overlay";

export interface CardProps {
    navigation: any,
    restaurants: any,
    reactToEnd: () => any,
    selectedResturant: (resturant: string) => any,
    customer: any
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
                onScroll={(e: any) => {
                    let paddingToBottom = 10;
                    paddingToBottom += e.nativeEvent.layoutMeasurement.height;
                    if (e.nativeEvent.contentOffset.y >= e.nativeEvent.contentSize.height - paddingToBottom) {
                        this.props.reactToEnd();
                    }
                }}
                pagingEnabled={true}>
                <View style={styles.container}>
                    {this.props.restaurants.map((restaurant: any, idx: any) => {
                        return (
                            <TouchableOpacity onPress={() => { this.props.selectedResturant(restaurant) }} key={idx}>
                                <View style={styles.card}>
                                    {(restaurant['restaurant_open'] == 1) ?
                                        <Image
                                            source={{ uri: restaurant.restaurant_image }}
                                            style={styles.image} /> :
                                        <View>
                                            <ImageOverlay source={{ uri: restaurant['restaurant_image'] }}
                                                containerStyle={styles.image} />
                                            <View style={{
                                                position: 'absolute',
                                                alignSelf: 'center',
                                                marginTop: '30%'
                                            }}>
                                                <Text style={{
                                                    color: 'white',
                                                    fontSize: 18
                                                }}>{restaurant['restaurant_message']}</Text>
                                            </View>
                                        </View>
                                    }
                                    {
                                        (this.props.customer && this.props.customer['user_access_token']) ?

                                            <TouchableHighlight
                                                style={styles.tchImg}
                                            // onPress={() => { this.favorite(restaurant) }}
                                            >
                                                <Image
                                                    source={require('../../../assets/app-images/like_btn_s_3_h.png')}
                                                    style={styles.tchImgDim}
                                                />
                                            </TouchableHighlight>
                                            :
                                            <View>
                                            </View>
                                    }
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
                            </TouchableOpacity>
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