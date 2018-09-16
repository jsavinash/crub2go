import * as React from "react";
import { View, Text, Image, Dimensions, TouchableOpacity, FlatList } from 'react-native';
import { addNavigationHelpers, NavigationState } from 'react-navigation';
import { Dispatch } from 'redux';
import { createReduxBoundAddListener } from 'react-navigation-redux-helpers';
import { styles } from './checkout-actionsheet-style';
import { ICartResponse, ICartTotal } from '@models';
const SCREEN_HEIGHT = Dimensions.get('window').height;

export interface CheckoutActionSheetProps {
    cart: ICartResponse[],
    cartTotal: ICartTotal,
    nav: NavigationState
    dispatch: Dispatch
}
interface CheckoutActionSheetState {
    isWalk: boolean,
    isBicycle: boolean,
    isMotercycle: boolean,
    isCar: boolean,
}
const colorCode = [
    {
        color: 'blue'
    },
    {
        color: 'red'
    }
];
export class CheckoutActionSheet extends React.Component<CheckoutActionSheetProps, CheckoutActionSheetState> {
    private navigation = addNavigationHelpers({
        dispatch: this.props.dispatch,
        state: this.props.nav,
        addListener: createReduxBoundAddListener('root'),
    });
    constructor(props: CheckoutActionSheetProps) {
        super(props);
        this.state = {
            isWalk: false,
            isBicycle: false,
            isMotercycle: false,
            isCar: true
        }
    }
    toggleClick = (type: string) => {
        switch (type) {
            case 'walk':
                this.setState({
                    isWalk: true,
                    isBicycle: false,
                    isMotercycle: false,
                    isCar: false
                });
                break;
            case 'bicycle':
                this.setState({
                    isWalk: false,
                    isBicycle: true,
                    isMotercycle: false,
                    isCar: false
                });
                break;
            case 'motercycle':
                this.setState({
                    isWalk: false,
                    isBicycle: false,
                    isMotercycle: true,
                    isCar: false
                });
                break;
            case 'car':
                this.setState({
                    isWalk: false,
                    isBicycle: false,
                    isMotercycle: false,
                    isCar: true
                });
                break;
            default:
                console.log('no action');
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.containerIn}>
                    <View style={styles.crossBtnDiv}>
                        <Image
                            source={require('../../../assets/app-images/close_btn_s_3b.png')}
                            style={styles.crossBtnDivImg}
                        ></Image>
                    </View>
                    <View style={styles.textContent}>
                        <Text style={styles.txt1}>How are you going to pickup?</Text>
                        <Text
                            style={styles.txt2}>
                            Choose the body style and color that betch match you so we can spot you when you arrived.
                    </Text>
                    </View>



                    <View style={styles.selTypDiv}>
                        <View style={styles.selTypDivView1}>
                            <Text style={styles.selTypDivView1Txt}>Select Type:</Text>
                        </View>
                        <View style={styles.selTypDivView2}>
                            <View style={styles.div1}>
                                <TouchableOpacity onPress={() => {
                                    this.toggleClick('walk');
                                }}>
                                    <View style={this.state.isWalk ? styles.div2 : styles.div21}>
                                        <Image
                                            source={this.state.isWalk ? require('../../../assets/app-images/img_walk_h.png') : require('../../../assets/app-images/img_walk.png')}
                                            resizeMode='stretch'
                                            style={styles.img}
                                        ></Image>
                                    </View>
                                </TouchableOpacity>
                                <Text style={styles.txt}>Walk</Text>
                            </View>
                            <View style={styles.div1}>
                                <TouchableOpacity onPress={() => {
                                    this.toggleClick('bicycle');
                                }}>
                                    <View style={this.state.isBicycle ? styles.div2 : styles.div21}>
                                        <Image
                                            source={this.state.isBicycle ? require('../../../assets/app-images/img_bicycle_h.png') : require('../../../assets/app-images/img_bicycle.png')}
                                            resizeMode='stretch'
                                            style={styles.img}
                                        ></Image>
                                    </View>
                                </TouchableOpacity>
                                <Text style={styles.txt}>Bicycle</Text>
                            </View>
                            <View style={styles.div1}>
                                <TouchableOpacity onPress={() => {
                                    this.toggleClick('motercycle');
                                }}>
                                    <View style={this.state.isMotercycle ? styles.div2 : styles.div21}>
                                        <Image
                                            source={this.state.isMotercycle ? require('../../../assets/app-images/img_motorcycle_h.png') : require('../../../assets/app-images/img_motorcycle.png')}
                                            resizeMode='stretch'
                                            style={styles.img}
                                        ></Image>
                                    </View>
                                </TouchableOpacity>
                                <Text style={styles.txt}>Motercycle</Text>
                            </View>
                            <View style={styles.div1}>
                                <TouchableOpacity onPress={() => {
                                    this.toggleClick('car');
                                }}>
                                    <View style={this.state.isCar ? styles.div2 : styles.div21}>
                                        <Image
                                            source={this.state.isCar ? require('../../../assets/app-images/img_car_h.png') : require('../../../assets/app-images/img_car.png')}
                                            resizeMode='stretch'
                                            style={styles.img}
                                        ></Image>
                                    </View>
                                </TouchableOpacity>
                                <Text style={styles.txt}>Car</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.selTypDiv}>
                        <View style={styles.selTypDivView1}>
                            <Text style={styles.selTypDivView1Txt}>Select Color:</Text>
                        </View>
                    </View>
                    <View style={styles.selTypDivView2}>
                        <FlatList
                            horizontal
                            data={colorCode}
                            renderItem={({ item: rowData }) => {
                                return (
                                    <View style={styles.div1}>
                                        <TouchableOpacity onPress={() => {
                                        }}>
                                            <View style={styles.bottomColor}>
                                                <Image
                                                    source={require('../../../assets/app-images/img_tickbig.png')}
                                                    resizeMode='stretch'
                                                    style={styles.img}
                                                ></Image>
                                            </View>
                                        </TouchableOpacity>
                                        <Text style={styles.txt}>Walk</Text>
                                    </View>
                                );
                            }}
                        />
                    </View>
                </View>
            </View>
        )
    }
}

