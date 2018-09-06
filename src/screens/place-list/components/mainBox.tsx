import * as React from "react";
import { Text, StyleSheet, View, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
import Icon from 'react-native-vector-icons/FontAwesome';
import ActionSheet from 'react-native-actionsheet';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards';
import { IRestaurants } from '@models';
import { PlaceCard, SearchBar, } from '@common_Component';
export interface MainBoxProps {
    navigation: any,
    restaurants: IRestaurants[],

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
                    {this.props.restaurants.map((restaurant, idx) => {
                        return (
                            <Card key={idx}>
                                <CardImage
                                    source={{ uri: restaurant.restaurant_image }}
                                />

                                <View style={styles.scrollContainer}>
                                    <Text style={styles.content1left}>{restaurant.restaurant_name}</Text>
                                    <Text style={styles.content1right}>Rating</Text>
                                </View>
                                <View style={styles.scrollContainer}>
                                    <Text style={styles.content2left}>{restaurant.restaurant_distance} Miles away</Text>
                                    <Text style={styles.content2right}>{restaurant.restaurant_rating}</Text>
                                </View>
                            </Card>
                        )
                    })}
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