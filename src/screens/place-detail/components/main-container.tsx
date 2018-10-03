import * as React from "react";
import { View, Image, Text } from 'react-native';
import { PlaceCard, Menu, ScrollText, ItemList } from './index';
import { StyleSheet, Dimensions } from 'react-native';
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
export interface MainBoxProps {
    resturant: any,
    categories: any,
    menuList: any,
    navigation: any,
    customer: any,
    onMenuSelect: (data: any) => any,
    onItemSelect: (data: any) => any,
}
interface MainBoxState {
    categorie: any
}
export class MainContainer extends React.Component<MainBoxProps, MainBoxState> {
    constructor(props: MainBoxProps) {
        super(props);
    }
    render() {
        return (
            <View style={styles.container}>
                <PlaceCard
                    navigation={this.props.navigation}
                    resturant={this.props.resturant}
                    customer={this.props.customer} />
                {(this.props.menuList.length > 0) ?
                    <>
                        <Menu />
                        <ScrollText
                            categorySelect={this.props.onMenuSelect}
                            categories={this.props.categories} />
                        <ItemList
                            onItemSelect={this.props.onItemSelect}
                            menuList={this.props.menuList}
                            navigation={this.props.navigation}
                        />
                    </>
                    :
                    <>
                        <View style={{
                            top: "55%",
                            position: 'absolute',
                            alignSelf: 'center'
                        }}>
                            <View style={{
                                width: ((SCREEN_WIDTH * 95) / 100),
                                height: ((SCREEN_HEIGHT * 12) / 100)
                            }}>
                                <Image
                                    source={require('../../../assets/app-images/img_noitems.png')}
                                    resizeMode={'contain'}
                                    style={{
                                        width: ((SCREEN_WIDTH * 95) / 100),
                                        height: ((SCREEN_HEIGHT * 12) / 100)
                                    }}
                                ></Image>
                            </View>
                            <View>
                                <Text style={{
                                    fontSize: 22,
                                    textAlign: 'center'
                                }}>No Menu available</Text>
                            </View>
                        </View>
                    </>
                }
            </View>
        )
    }
}
var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    }
});