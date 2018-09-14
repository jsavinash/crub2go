import * as React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';

export interface PromoProps {
    navigation: any
}

export const Promo: React.StatelessComponent<PromoProps> = (props) => {
    const navigateTo = (path: string) => {
        props.navigation.navigate(`${path}`);
    }
    return (
        <View style={styles.container}>
            <View style={styles.margin}>
                <TouchableOpacity onPress={() => {
                    navigateTo('Deals');
                }}>
                    <View style={styles.rowContent}>
                        <View style={styles.content}>
                            <Text style={styles.contentTxt1}>Promo Code</Text>
                            <Text style={styles.contentTxt2}>TGB125</Text>
                        </View>
                        <View>
                            <Button
                                onPress={() => { props.onSubmitPress(true) }}
                                title="Apply"
                                buttonStyle={styles.containerInBtnStyle}
                                containerViewStyle={styles.containerInBtnCnt} />
                        </View>
                    </View>
                </TouchableOpacity>
                <View style={styles.border}></View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: 'white'
    },
    margin: {
        marginLeft: '4%',
        marginRight: '4%',
        marginTop: '4%'
    },
    rowContent: {
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    content: {
        marginTop: '2%',
        marginLeft: '2%',
        flexDirection: 'column'
    },
    contentTxt1: {
        color: '#dcdcdc',
        fontSize: 12
    },
    contentTxt2: {
        color: 'black',
        fontSize: 14
    },
    containerInBtnStyle: {
        backgroundColor: '#ACD472',
        borderColor: 'transparent',
        borderWidth: 1,
        borderRadius: 30
    },
    containerInBtnCnt: {
        width: '80%'
    },
    border: {
        marginTop: '4%',
        borderBottomColor: '#aaa',
        borderBottomWidth: 1,
        marginBottom: '4%'
    }
});