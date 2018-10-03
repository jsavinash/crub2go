import * as React from "react";
import { Text, StyleSheet, View, Dimensions, Image, TouchableHighlight } from 'react-native';
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
import ImageOverlay from "react-native-image-overlay";
import { transformToFromData } from '@common_service';
import { RestaurantRestService } from '../../../services';

export interface PlaceCardProps {
    navigation: any,
    resturant: any,
    customer: any
}
export interface state {
    fav: boolean
}
export class PlaceCard extends React.Component<PlaceCardProps, state> {

    constructor(props: PlaceCardProps) {
        super(props);
        this.state = {
            fav: (this.props.resturant['restaurant_favourite'] == "1") ? true : false 
        }
    }
    private favorite = (restaurant: any) => {
        const { customer } = this.props;
        let data = {
            user_id: customer['user_id'],
            restaurant_id: restaurant['restaurant_id']
        }
        RestaurantRestService.markFavoriteRestaurant(transformToFromData(data), customer['user_access_token']).then((fav: any) => {
            console.log("fav", fav);
            this.setState({ fav: !this.state.fav });
        }).catch((error: any) => {

        })
    }
    render() {
        return (
            <View style={styles.card} >
                <View>
                    {(this.props.resturant['restaurant_open'] == 1) ?
                        <Image
                            source={{ uri: this.props.resturant.restaurant_image }}
                            style={styles.cardImg} /> :
                        <ImageOverlay source={{ uri: this.props.resturant['restaurant_image'] }}
                            containerStyle={styles.cardImg} />
                    }
                    {this.props.customer['user_access_token'] ?
                        <TouchableHighlight
                            style={styles.fav}
                            onPress={() => { this.favorite(this.props.resturant) }}
                        >
                            <Image
                                source={((this.state.fav)) ?
                                    require('../../../assets/app-images/like_btn_s_3_h.png')
                                    :
                                    require('../../../assets/app-images/like_btn_s_3.png')
                                }
                                style={styles.favImg}
                            />
                        </TouchableHighlight>

                        : <View />
                    }

                    <TouchableHighlight
                        style={styles.info} onPress={() => {
                            this.props.navigation.navigate('Location', { resturant: this.props.resturant });
                        }}>
                        <Image
                            source={require('../../../assets/app-images/img_info_white.png')}
                            style={styles.infoImg} />
                    </TouchableHighlight>
                    <View style={styles.cardContent}>
                        <View style={styles.row1}>
                            <Text style={styles.row1Left}>{this.props.resturant.restaurant_name}</Text>
                            <Text style={styles.row1Right}>Ratings</Text>
                        </View>
                        <View style={styles.row2}>
                            <Text style={styles.row2Left}>{this.props.resturant.restaurant_distance} Miles away</Text>
                            <Text style={styles.row2Right}>{this.props.resturant.restaurant_rating}</Text>
                        </View>
                        <View style={styles.row2}>
                            <Text style={styles.row2Left}>{this.props.resturant.restaurant_address}</Text>
                        </View>
                    </View>
                </View>
            </View >
        )
    }
}
var styles = StyleSheet.create({
    card: {
        flex: 1
    },
    cardImg: {
        width: SCREEN_WIDTH,
        height: ((SCREEN_HEIGHT * 28) / 100)
    },
    fav: {
        marginTop: 4,
        right: 4,
        position: 'absolute'
    },

    favImg: {
        height: 30,
        width: 30
    },
    info: {
        bottom: 4,
        right: 4,

        position: 'absolute'
    },
    infoImg: {
        height: 30,
        width: 30,
        marginBottom: ((SCREEN_HEIGHT * 15) / 100)
    },
    cardContent: {
        width: SCREEN_WIDTH,
        height: ((SCREEN_HEIGHT * 15) / 100),
        backgroundColor: 'white',
    },
    row1: {
        marginTop: '2%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    row1Left: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        color: 'black',
        fontSize: 20,
        fontWeight: '400',
        marginLeft: '5%'
    },
    row1Right: {
        marginRight: "2%"
    },



    row2: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    row2Left: {
        flex: 1,
        flexDirection: 'row',
        fontSize: 12,
        justifyContent: 'flex-start',
        marginLeft: '5%',
        color: '#aaa',
    },
    row2Right: {
        marginRight: "5%",
        color: '#ACD472',
        fontSize: 22,
        fontWeight: '500'
    }
});