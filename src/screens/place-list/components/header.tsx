import * as React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity, Dimensions } from 'react-native'
const SCREEN_WIDTH = Dimensions.get('window').width;
import Icon from 'react-native-vector-icons/FontAwesome';

export interface HeaderProps {
    navigation: any,
    onSort: () => any
}

interface HeaderState {

}
export class Header extends React.Component<HeaderProps, HeaderState> {
    constructor(props: HeaderProps) {
        super(props);
    }
    public navigateTo = () => {
        this.props.navigation.navigate('City');
    }
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => {
                    this.navigateTo();
                }}>
                    <View style={styles.locationImgContent}>
                        <Image
                            source={require('../../../assets/app-images/location_icon_s_3.png')}
                            style={styles.image}
                        ></Image>
                        <View style={styles.content}>
                            <Text style={styles.txt1}>Your Location</Text>
                            <Text style={styles.txt2}>Ahmedabad</Text>
                        </View>

                        <View style={styles.arrowContent}>
                            <Image
                                source={require('../../../assets/app-images/dropdown_arrow_s_3.png')}
                                resizeMode={'contain'}
                                style={styles.arrowimage}
                            ></Image>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    this.props.onSort();
                }}>
                    <View style={styles.imageCtn}>
                        <Image
                            source={require('../../../assets/app-images/menu_icon_s_3_h.png')}
                            resizeMode={'contain'}
                            style={styles.menuimage}
                        ></Image>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        height: '11%',
        width: '100%',
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderColor: '#aaa'
    },
    locationImgContent: {
        marginTop: '4%',
        marginLeft: '2%',
        flexDirection: 'row'
    },
    content: {
        marginLeft: 10,
        flexDirection: 'column'
    },
    txt1: {
        fontSize: 14,
        color: '#ACD472'
    },
    txt2: {
        color: 'black',
        fontSize: 16,
        fontWeight: '600'
    },
    arrowContent: {
        marginLeft: '8%'
    },
    imageCtn: {
        marginTop: '2%',
    },
    image: {
        height: 35,
        width: 35,
        left: 0
    },
    arrowimage: {
        marginTop: 26,
        height: 15,
        width: 15,
    },
    menuimage: {
        marginTop: '10%',
        marginRight: '6%',
        height: 35,
        width: 35,
    }
});
