import * as React from "react";
import { StyleSheet, View, Text, Image } from 'react-native';
export interface YourCartProps {
}
export const YourCart: React.StatelessComponent<YourCartProps> = (props) => {
    return (
        <View style={{
            backgroundColor: 'white',

        }}>
            <View style={{
                marginLeft: '2%',
                marginRight: '2%'
            }}>
                <View style={styles.container}>
                    <View style={styles.content1}>
                        <Text style={styles.contentTxt}>Have A Break X 1</Text>
                        <Text style={styles.contentTxtMini}>1 Extra ($1.00)</Text>
                    </View>
                    <View style={styles.content2}>
                        <Text style={styles.contentTxt}>$110</Text>
                    </View>
                </View>
                <View style={{
                    borderBottomWidth: 1,
                    borderBottomColor: '#aaa',
                    marginBottom: '2%'
                }}>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '100%',
        borderColor: '#aaa'
    },
    content1: {
        flexDirection: 'column',
        marginTop: '3%',
        marginLeft: '2%',
        marginBottom: '3%',
    },
    content2: {
        marginTop: '3%',
        marginRight: '2%',
        marginBottom: '3%',
    },
    contentTxt: {
        color: 'black',
        fontSize: 14,
    },
    contentTxtMini: {
        color: '#aaa',
        fontSize: 12
    },
    image: {
        height: 35,
        width: 35,
        left: 0
    },
});