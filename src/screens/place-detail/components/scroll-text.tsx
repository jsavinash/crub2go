import * as React from "react";
import { FlatList, Text, TouchableOpacity, StyleSheet, View } from "react-native";
import { ICategories } from '@models';
export interface ScrollTextProps {
    categories: ICategories,
    categorySelect: (categorie: any) => any
}
export const ScrollText: React.StatelessComponent<ScrollTextProps> = (props) => {
    const select = (rowData: any) => {
        props.categorySelect(rowData);
    }
    return (
        <View style={styles.container}>
            <FlatList
                horizontal
                data={props.categories}
                renderItem={({ item: rowData }) => {
                    return (
                        <View style={styles.div1}>
                            <TouchableOpacity onPress={() => {
                                select(rowData);
                            }}>
                                <Text>{rowData.cat_name}</Text>
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
        width: '100%',
        height: '10%',
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderColor: '#aaa'
    },
    div1: {
        alignSelf: 'center',
        marginLeft: 15
    }

});