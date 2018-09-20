import * as React from "react";
import { View, Text, Image, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import { Dispatch } from 'redux';
import { styles } from './checkout-actionsheet-style';
import { ICartResponse, ICartTotal } from '@models';
const SCREEN_HEIGHT = Dimensions.get('window').height;
import { Button } from 'react-native-elements';
import CHeckoutButton from '../proceed-button';
export interface CheckoutActionSheetProps {
    cart: ICartResponse[],
    cartTotal: ICartTotal,
    dispatch: Dispatch,
    checkoutParams: any,
    checkoutParamsAction: (checkout: any) => any,
    navScreen: (screen: any) => any
}
interface CheckoutActionSheetState {
    isWalk: boolean,
    isBicycle: boolean,
    isMotercycle: boolean,
    isCar: boolean,
    isRed: boolean,
    isWhite: boolean,
    isBlack: boolean,
    isNeon: boolean,
    isViolet: boolean,
    isYellow: boolean,

}
export class CheckoutActionSheet extends React.Component<CheckoutActionSheetProps, CheckoutActionSheetState> {
    constructor(props: CheckoutActionSheetProps) {
        super(props);
        this.state = {
            isWalk: false,
            isBicycle: false,
            isMotercycle: false,
            isCar: true,
            isRed: false,
            isWhite: false,
            isBlack: false,
            isNeon: true,
            isViolet: false,
            isYellow: false,
        }
    }
    toggleVehicleType = (type: string) => {
        const { checkoutParams, checkoutParamsAction } = this.props;
      
        const cpyCheckoutParams = { ...checkoutParams };
        cpyCheckoutParams['vehicle_type'] = 'car';
        switch (type) {
            case 'walk':
                this.setState({
                    isWalk: true,
                    isBicycle: false,
                    isMotercycle: false,
                    isCar: false
                });
                cpyCheckoutParams['vehicle_type'] = 'walk';
                checkoutParamsAction(cpyCheckoutParams);

                break;
            case 'bicycle':
                this.setState({
                    isWalk: false,
                    isBicycle: true,
                    isMotercycle: false,
                    isCar: false
                });
                cpyCheckoutParams['vehicle_type'] = 'bicycle';
                checkoutParamsAction(cpyCheckoutParams);
                break;
            case 'motercycle':
                this.setState({
                    isWalk: false,
                    isBicycle: false,
                    isMotercycle: true,
                    isCar: false
                });
                cpyCheckoutParams['vehicle_type'] = 'motercycle';
                checkoutParamsAction(cpyCheckoutParams);
                break;
            case 'car':
                this.setState({
                    isWalk: false,
                    isBicycle: false,
                    isMotercycle: false,
                    isCar: true
                });
                cpyCheckoutParams['vehicle_type'] = 'car';
                checkoutParamsAction(cpyCheckoutParams);
                break;
            default:
                checkoutParamsAction(cpyCheckoutParams);
                console.log('no action');
        }
    }
    toggleColor = (type: string) => {
        const { checkoutParams, checkoutParamsAction } = this.props;
        const cpyCheckoutParams = { ...checkoutParams };
        cpyCheckoutParams['vehicle_color'] = 'neon';
        switch (type) {
            case 'black':
                this.setState({
                    isRed: false,
                    isWhite: false,
                    isBlack: true,
                    isNeon: false,
                    isViolet: false,
                    isYellow: false,
                });
                cpyCheckoutParams['vehicle_color'] = 'black';
                checkoutParamsAction(cpyCheckoutParams);
                break;
            case 'white':
                this.setState({
                    isRed: false,
                    isWhite: true,
                    isBlack: false,
                    isNeon: false,
                    isViolet: false,
                    isYellow: false,
                });
                cpyCheckoutParams['vehicle_color'] = 'white';
                checkoutParamsAction(cpyCheckoutParams);
                break;
            case 'red':
                this.setState({
                    isRed: true,
                    isWhite: false,
                    isBlack: false,
                    isNeon: false,
                    isViolet: false,
                    isYellow: false,
                });
                cpyCheckoutParams['vehicle_color'] = 'red';
                checkoutParamsAction(cpyCheckoutParams);
                break;
            case 'neon':
                this.setState({
                    isRed: false,
                    isWhite: false,
                    isBlack: false,
                    isNeon: true,
                    isViolet: false,
                    isYellow: false,
                });
                cpyCheckoutParams['vehicle_color'] = 'neon';
                checkoutParamsAction(cpyCheckoutParams);
                break;
            case 'violet':
                this.setState({
                    isRed: false,
                    isWhite: false,
                    isBlack: false,
                    isNeon: false,
                    isViolet: true,
                    isYellow: false,
                });
                cpyCheckoutParams['vehicle_color'] = 'blue';
                checkoutParamsAction(cpyCheckoutParams);
                break;
            case 'yellow':
                this.setState({
                    isRed: false,
                    isWhite: false,
                    isBlack: false,
                    isNeon: false,
                    isViolet: false,
                    isYellow: true,
                });
                cpyCheckoutParams['vehicle_color'] = 'yellow';
                checkoutParamsAction(cpyCheckoutParams);
                break;
            default:
                checkoutParamsAction(cpyCheckoutParams);
        }
    }
    private onCancel = () => {
        const { checkoutParams, checkoutParamsAction } = this.props;
        const cpyCheckoutParams = { ...checkoutParams };
        cpyCheckoutParams.isCheckoutSheet = false;
        checkoutParamsAction(cpyCheckoutParams);
    }
    private onPayment = () => {
    
        const { checkoutParams, checkoutParamsAction } = this.props;
        const cpyCheckoutParams = { ...checkoutParams };
        if (!cpyCheckoutParams['vehicle_color'])
            cpyCheckoutParams['vehicle_color'] = 'neon';
        if (!cpyCheckoutParams['vehicle_type'])
            cpyCheckoutParams['vehicle_type'] = 'car';
        cpyCheckoutParams['isCheckoutSubmit'] = true;
        checkoutParamsAction(cpyCheckoutParams);
        setTimeout(() => {
            this.move();
        }, 0);
    }
    private move = () => {
        const { checkoutParams, checkoutParamsAction } = this.props;
        const cpyCheckoutParams = { ...checkoutParams };
        cpyCheckoutParams['isCheckoutSheet'] = false;
        checkoutParamsAction(cpyCheckoutParams);
    }
    render() {
        console.log("this.props.checkoutParams", this.props.checkoutParams);
        if (this.props.checkoutParams && (this.props.checkoutParams.isCheckoutSheet == true)) {
            return (
                <View style={styles.container}>
                    <View style={styles.containerIn}>
                        <TouchableOpacity onPress={() => {
                            this.onCancel()
                        }}>
                            <View style={styles.crossBtnDiv}>
                                <Image
                                    source={require('../../../assets/app-images/close_btn_s_3b.png')}
                                    style={styles.crossBtnDivImg}
                                ></Image>
                            </View>
                        </TouchableOpacity>
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
                                        this.toggleVehicleType('walk');
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
                                        this.toggleVehicleType('bicycle');
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
                                        this.toggleVehicleType('motercycle');
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
                                        this.toggleVehicleType('car');
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



                        <ScrollView
                            horizontal={true}
                        >
                            <View style={styles.selTypDivView2}>
                                <View style={styles.div1}>
                                    <TouchableOpacity onPress={() => {
                                        this.toggleColor('black')
                                    }}>
                                        <View style={styles.black}>
                                            {
                                                this.state.isBlack ?
                                                    <Image
                                                        source={require('../../../assets/app-images/img_tickbig.png')}
                                                        resizeMode='stretch'
                                                        style={styles.img}
                                                    ></Image> : <View></View>
                                            }
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={styles.selTypDivView2}>
                                <View style={styles.div1}>
                                    <TouchableOpacity onPress={() => {
                                        this.toggleColor('white')
                                    }}>
                                        <View style={styles.white}>
                                            {
                                                this.state.isWhite ?
                                                    <Image
                                                        source={require('../../../assets/app-images/img_tickbig.png')}
                                                        resizeMode='stretch'
                                                        style={styles.img}
                                                    ></Image> : <View></View>
                                            }
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={styles.selTypDivView2}>
                                <View style={styles.div1}>
                                    <TouchableOpacity onPress={() => {
                                        this.toggleColor('red')
                                    }}>
                                        <View style={styles.red}>
                                            {
                                                this.state.isRed ?
                                                    <Image
                                                        source={require('../../../assets/app-images/img_tickbig.png')}
                                                        resizeMode='stretch'
                                                        style={styles.img}
                                                    ></Image> : <View></View>
                                            }
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={styles.selTypDivView2}>
                                <View style={styles.div1}>
                                    <TouchableOpacity onPress={() => {
                                        this.toggleColor('neon')
                                    }}>
                                        <View style={styles.neon}>
                                            {
                                                this.state.isNeon ?
                                                    <Image
                                                        source={require('../../../assets/app-images/img_tickbig.png')}
                                                        resizeMode='stretch'
                                                        style={styles.img}
                                                    ></Image> : <View></View>
                                            }
                                        </View>
                                    </TouchableOpacity>
                                </View>

                            </View>
                            <View style={styles.selTypDivView2}>
                                <View style={styles.div1}>
                                    <TouchableOpacity onPress={() => {
                                        this.toggleColor('violet')
                                    }}>
                                        <View style={styles.violet}>
                                            {
                                                this.state.isViolet ?
                                                    <Image
                                                        source={require('../../../assets/app-images/img_tickbig.png')}
                                                        resizeMode='stretch'
                                                        style={styles.img}
                                                    ></Image> : <View></View>
                                            }
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={styles.selTypDivView2}>
                                <View style={styles.div1}>
                                    <TouchableOpacity onPress={() => {
                                        this.toggleColor('yellow')
                                    }}>
                                        <View style={styles.yellow}>
                                            {
                                                this.state.isYellow ?
                                                    <Image
                                                        source={require('../../../assets/app-images/img_tickbig.png')}
                                                        resizeMode='stretch'
                                                        style={styles.img}
                                                    ></Image> : <View></View>
                                            }
                                        </View>
                                    </TouchableOpacity>
                                </View>

                            </View>
                        </ScrollView>
                        <View style={{
                            marginTop: ((SCREEN_HEIGHT * 3) / 100)
                        }}>

                            {
                                this.props.checkoutParams['isCheckoutSubmit'] ? <CHeckoutButton />
                                    : <Button
                                        onPress={() => {
                                            this.onPayment();
                                            // props.onSubmitPress(true)

                                        }}
                                        title="PROCEED TO PAYMENT"
                                        buttonStyle={styles.containerInBtnStyle}
                                    />
                            }

                            {/* <Button
                                onPress={() => {
                                    this.onPayment();
                                    // props.onSubmitPress(true)

                                }}
                                title="PROCEED TO PAYMENT"
                                buttonStyle={styles.containerInBtnStyle}
                            /> */}


                        </View>
                    </View>
                </View>
            )
        } else {
            return (
                <View></View>
            )
        }
    }
}

