import * as React from "react";
import { Text, StyleSheet, View, Dimensions, Image, TouchableHighlight } from 'react-native';
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
export interface PlaceCardProps {

}
export const PlaceCard: React.StatelessComponent<PlaceCardProps> = (props) => {
    return (
        <View style={styles.card}>
            <View>
                <Image
                    source={{ uri: "http://curb2go.projectspreview.net/public/upload/restaurant_images/vOVU04zYDLaMsS9m_rimage.jpeg" }}
                    style={styles.cardImg} />
                <TouchableHighlight
                    style={styles.fav}
                // onPress={() => { this.favorite(restaurant) }}
                >
                    <Image
                        source={require('../../../assets/app-images/heart-outline.png')}
                        style={styles.favImg}
                    />
                </TouchableHighlight>
                <TouchableHighlight
                    style={styles.info}>
                    <Image
                        source={require('../../../assets/app-images/img_info_h.png')}
                        style={styles.infoImg} />
                </TouchableHighlight>
                <View style={styles.cardContent}>
                    <View style={styles.row1}>
                        <Text style={styles.row1Left}>{'Salad Fusion (Satellite)'}</Text>
                        <Text style={styles.row1Right}>Ratings</Text>
                    </View>
                    <View style={styles.row2}>
                        <Text style={styles.row2Left}>{'10'} Miles away</Text>
                        <Text style={styles.row2Right}>{'3.6'}</Text>
                    </View>
                    <View style={styles.row2}>
                        <Text style={styles.row2Left}>Prahlad Nagar, Ahmedabad, Gujarat, India</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}
var styles = StyleSheet.create({
    card: {
        flex: 0.54
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