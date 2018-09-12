import * as React from "react";
import { Text, StyleSheet, View, Dimensions, ScrollView, Image, TouchableOpacity, TouchableHighlight } from 'react-native';
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
import Icon from 'react-native-vector-icons/FontAwesome';
import ActionSheet from 'react-native-actionsheet';
import { IRestaurants, IFavoriteParams } from '@models';
import { SearchBar, } from '@common_Component';
import { RestaurantRestService } from '../../../services';
export interface MainBoxProps {
    navigation: any,
    restaurants: IRestaurants[]
}
interface MainBoxState {

}
export class MainBox extends React.Component<MainBoxProps, MainBoxState> {
    constructor(props: MainBoxProps) {
        super(props);
    }
    openActionSheet = () => {
        this.ActionSheet.show()
    }
    onAction = (idx: number) => {
        if (idx === 0) {
            console.log("idx", idx, 'Distance');
        } else if (idx === 1) {
            console.log("idx", idx, 'Rating');
        }
    }

    public navigateTo = () => {
        this.props.navigation.navigate('City');
    }

    public favorite = (restaurant: any) => {
        console.log("restaurant", restaurant);
        const favorite: IFavoriteParams = {
            restaurant_id: restaurant['restaurant_id']
        };
        RestaurantRestService.markFavoriteRestaurant(favorite).then((favoriteRes: any) => {
            console.log("favoriteRes", favoriteRes);
        }).catch((error) => {
            console.log("favoriteRes errrior", error);
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.div1}>
                    <View style={styles.div2}>
                        <Icon.Button name="map-pin" color="#ACD472" backgroundColor="white" onPress={this.openActionSheet}>
                        </Icon.Button>
                    </View>
                    <View style={styles.div3}>
                        <Text style={styles.div3Txt1}>Your Location</Text>
                        <TouchableOpacity onPress={this.navigateTo}>
                            <Text style={styles.div3Txt2}>Ahmedabad</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginTop: '2%' }}>
                        <Icon.Button name="list" color="#ACD472" backgroundColor="white" onPress={this.openActionSheet}>
                        </Icon.Button>
                    </View>
                </View>
                <SearchBar />
                <ScrollView>
                    <View style={{
                        backgroundColor: 'white',
                    }}>
                        {this.props.restaurants.map((restaurant, idx) => {
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
                <ActionSheet
                    ref={o => this.ActionSheet = o}
                    options={['Distance', 'Rating']}
                    onPress={this.onAction}
                />
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