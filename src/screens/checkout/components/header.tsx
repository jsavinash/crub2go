import * as React from "react";
import { NavigationActions } from 'react-navigation'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
export interface HeaderProps {
    navigation: any
}
export const Header: React.StatelessComponent<HeaderProps> = (props) => {
    const goBack = () => {
        NavigationActions.back
        //   props.navigation.navigate('')
    }
    return (
        <View style={styles.container}>
            <View style={styles.imageContent}>
                <TouchableOpacity onPress={() => {
                    goBack();
                }}>
                    <Image
                        source={require('../../../assets/app-images/close_btn_s_3b.png')}
                        style={styles.image}
                    ></Image>
                </TouchableOpacity>
            </View>
            <View style={styles.textContent}>
                <Text style={styles.contentTxt1}>Checkout</Text>
                <Text style={styles.contentTxt2}>TGB Cafe n Bakery</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        backgroundColor: '#ACD472',
        borderBottomWidth: 2,
        borderTopWidth: 1,
        borderColor: '#cdcdcd'
    },
    imageContent: {
        marginTop: '8%',
        marginLeft: '4%',
        marginBottom: '8%'
    },
    image: {
        height: 15,
        width: 15,
        left: 0
    },
    textContent: {
        marginTop: '4%',
        marginBottom: '4%'
    },
    contentTxt1: {
        color: 'white',
        fontSize: 18,
        fontWeight: '500',
        marginLeft: '45%',
    },
    contentTxt2: {
        color: 'white',
        fontSize: 14,
        marginLeft: '38%',
    }

});