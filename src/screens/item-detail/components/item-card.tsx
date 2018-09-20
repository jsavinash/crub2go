import * as React from "react";
import { Text, StyleSheet, View, Dimensions, Image, TouchableHighlight } from 'react-native';
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
import { Images } from "@themes";
export interface ItemCardProps {
    image: any,
    title: any
}
export const ItemCard: React.StatelessComponent<ItemCardProps> = (props) => {
    return (
        <View style={styles.container}>
            <View>
                <Image
                    source={{ uri: props.image }}
                    style={styles.cardImg} />
                <TouchableHighlight
                    style={styles.back}>
                    <Image
                        source={Images.LEFT_WHITE_BACK_ARROW}
                        style={styles.backImg} />
                </TouchableHighlight>
                <View style={styles.txtContent}>
                    <Text style={styles.txt}>{props.title}</Text>
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