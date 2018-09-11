import * as React from "react";
import { StyleSheet, View, Text, Image } from 'react-native';
export interface MenuProps {
}
export const Menu: React.StatelessComponent<MenuProps> = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.contentTxt}>Menu</Text>
            </View>
            <View style={styles.imageCtn}>
                <Image
                    source={require('../../../assets/app-images/search_icon_s_3.png')}
                    style={styles.image}
                ></Image>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        height: '9%',
        width: '100%',
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderColor: '#aaa'
    },
    content: {
        marginTop: '5%',
        marginLeft: '8%'
    },
    contentTxt: {
        color: 'black',
        fontSize: 14
    },
    imageCtn: {
        marginTop: '2%',
    },
    image: {
        height: 35,
        width: 35,
        left: 0
    },
});