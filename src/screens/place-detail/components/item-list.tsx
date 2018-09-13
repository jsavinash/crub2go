import * as React from "react";
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { IMenuList } from '@models';
export interface ItemListProps {
    navigation: any,
    onItemSelect: (data: any) => any,
    menuList: IMenuList[]
}
export const ItemList: React.StatelessComponent<ItemListProps> = (props) => {
    return (
        <ScrollView>
            <View style={styles.title}>
                <Text style={styles.titleTxt}>
                    {(props.menuList && props.menuList[0]) ? props.menuList[0].item_cat_name : ''}</Text></View>
            {
                props.menuList.map((item: any, idx: number) => {
                    return (
                        <TouchableOpacity key={idx}
                            onPress={() => { props.onItemSelect(item) }}
                        >
                            <View>
                                    {(item && item.item_image) ?
                                        <View style={styles.container}>
                                            <View style={styles.textContent}>
                                                <Text style={styles.text1}>{item.item_name}</Text>
                                                <Text style={styles.text2}>{item.item_discription}</Text>
                                                <Text style={styles.text3}>$ {item.item_discounted_price}</Text>
                                            </View>
                                            <View style={styles.imgContent}>
                                                <Image
                                                    source={{ uri: item.item_image }}
                                                    resizeMode={'cover'}
                                                    style={styles.img}
                                                ></Image>
                                            </View>
                                        </View> :
                                        <View style={styles.container}>
                                            <View style={styles.textContent1}>
                                                <Text style={styles.text1}>{item.item_name}</Text>
                                                <Text style={styles.text2}>{item.item_discription}</Text>
                                                <Text style={styles.text3}>$ {item.item_discounted_price}</Text>
                                            </View>
                                        </View>

                                    }
                                <View style={styles.border}>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )
                })
            }

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'white',
        justifyContent: 'space-between',
        borderBottomColor: '#aaa'
    },
    title: {
        marginTop: '2%',
        marginLeft: '2%'
    },
    titleTxt: {
        fontWeight: '200',
        fontSize: 22,
        color: 'black'
    },
    textContent: {
        borderRadius: 22,
        width: '68%',
        marginTop: 10,
        marginLeft: 5
    },
    textContent1: {
        borderRadius: 22,
        width: '100%',
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
        borderRadius: 22

    },
    border: {
        borderBottomColor: 'black',
        borderBottomWidth: 1
    }
});