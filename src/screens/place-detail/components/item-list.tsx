import * as React from "react";
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';
export interface ItemListProps {
}

export const ItemList: React.StatelessComponent<ItemListProps> = (props) => {
    return (
        <ScrollView>
            <View>
                <View style={styles.container}>
                    <View style={styles.textContent}>
                        <Text style={styles.text1}>Mexican Fusion</Text>
                        <Text style={styles.text2}>Kidney beans, corn, capsicum, tomato, onion, and lettuce</Text>
                        <Text style={styles.text3}>$ 1234</Text>
                    </View>
                    <View style={styles.imgContent}>
                        <Image
                            source={require('../../../assets/app-images/search_icon_s_3.png')}
                            style={styles.img}
                        ></Image>
                    </View>
                </View>
                <View style={styles.border}>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'white',
        justifyContent: 'space-between',
        borderBottomColor: '#aaa'
    },
    textContent: {
        borderRadius: 22,
        width: '68%',
        marginTop: 10,
        marginLeft: 5
    },
    text1: {
        fontSize: 16,
        color: 'black'
    },
    text2: {
        fontSize: 12,
        color: 'black'
    },
    text3: {
        fontSize: 16,
        color: '#ACD472'
    },
    imgContent: {
        borderWidth: 1,
        margin: 10,
        borderRadius: 22
    },
    img: {
        height: 90,
        width: 90,
    },
    border: {
        borderBottomColor: 'black',
        borderBottomWidth: 1
    }
});