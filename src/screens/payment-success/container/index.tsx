import * as React from "react"
import { Dimensions, ImageBackground, StyleSheet, View, TouchableOpacity, Text, Image } from "react-native";
import SplashScreen from 'react-native-splash-screen';
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
import { SuccessCard } from '../components';
export interface Props {
    navigation: any
}


interface State {

}
export class PaymentSuccess extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }
    componentDidMount() {
        SplashScreen.hide();
    }
    navigateTo = (screen: string): any => {
        this.props.navigation.navigate(`${screen}`);
    };
    render() {
        return (
            <ImageBackground
                source={require('../../../assets/app-images/bg.png')}
                style={styles.bgImage}>
                <Image
                    source={require('../../../assets/app-images/payment_success.png')}
                    resizeMode="contain"
                    style={styles.image}>
                </Image>
                <View style={{
                    alignItems: 'center',
                    marginBottom: '2%'
                }}>
                    <Text
                        style={{
                            color: 'white',
                            fontSize: 25
                        }}>Payment Successfull</Text>
                </View>
                <SuccessCard />
            </ImageBackground>
        )
    }
}
var styles = StyleSheet.create({
    bgImage: {
        flex: 1,
        top: 0,
        left: 0,
        position: 'absolute',
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT,
    },
    header: {
        position: 'absolute',
        flexDirection: 'row',
        top: 0
    },
    headerIn: {
        width: '100%',
    },
    txtTouch: {
        marginTop: '8%',
        right: '10%',
        alignSelf: 'flex-end'
    },
    skip: {
        color: 'white',
        fontSize: 20
    },
    image: {
        alignSelf: 'center',
        height: '20%',
        width: '30%',
        marginTop: '8%',
        marginBottom: '2%'
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        width: SCREEN_WIDTH,
        height: '10%'
    },
    footerIn: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    txt1: {
        marginTop: '1%'
    },
    txt2: {
        color: '#ACD472',
        marginLeft: '2%',
        fontSize: 20,
    }
});