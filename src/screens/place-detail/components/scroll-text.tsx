import * as React from "react";
import { FlatList, Text, TouchableOpacity, StyleSheet, View } from "react-native";

export interface ScrollTextProps {
}

const data = [
    {
        title: "something"
    },
    {
        title: "something two"
    },
    {
        title: "something three"
    },
    {
        title: "something four"
    },
    {
        title: "something five"
    },
    {
        title: "something six"
    }
];
export const ScrollText: React.StatelessComponent<ScrollTextProps> = (props) => {
    const select = (data: any) => {

    }
    return (
        <View style={{
            width: '100%',
            height: '10%',
            backgroundColor: 'white',
            borderBottomWidth: 1,
            borderColor: '#aaa'
        }}>
            <FlatList
                horizontal
                data={data}
                renderItem={({ item: rowData }) => {
                    return (
                        <View style={{
                            alignSelf: 'center',
                            marginLeft: 15
                        }}>
                            <TouchableOpacity onPress={(rowData) => {
                                select(rowData);
                            }}>
                                <Text>{rowData.title}</Text>
                            </TouchableOpacity>
                        </View>
                    );
                }}
            />
        </View>

    )
}
const styles = StyleSheet.create({
    container: {
    },

});