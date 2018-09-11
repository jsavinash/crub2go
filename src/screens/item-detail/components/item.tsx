import * as React from "react";
import { Text, StyleSheet, View, Dimensions, Image, TouchableHighlight } from 'react-native';
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
export interface ItemCardProps {

}
export const ItemCard: React.StatelessComponent<ItemCardProps> = (props) => {
    return (
        <View style={styles.container}>
            <View>
                <Image
                    source={{ uri: "http://curb2go.projectspreview.net/public/upload/restaurant_images/vOVU04zYDLaMsS9m_rimage.jpeg" }}
                    style={styles.cardImg} />
                <TouchableHighlight
                    style={styles.back}>
                    <Image
                        source={require('../../../assets/app-images/heart-outline.png')}
                        style={styles.backImg} />
                </TouchableHighlight>
                <View style={styles.txtContent}>
                    <Text style={styles.txt}>Herb Pasta</Text>
                </View>
            </View>
        </View>
    )
}
var styles = StyleSheet.create({
    container: {
        flex: 0.34
    },
    cardImg: {

        
        width: SCREEN_WIDTH,
        height: '100%'
    },
    back: {
        marginTop: 4,
        left: 4,
        position: 'absolute'
    },
    backImg: {
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
    txtContent:
    {
        position: 'absolute',
        bottom: '14%',
        left: '8%'
    },
    txt: {
        color: 'white',
        fontSize: 22
    }
});