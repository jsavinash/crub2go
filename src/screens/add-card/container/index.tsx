import * as React from "react"
import { Dimensions, ImageBackground, StyleSheet, View, ScrollView, AsyncStorage, Text, Image } from "react-native";
import SplashScreen from 'react-native-splash-screen';
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
import { Card } from '../components';
export interface AddCardProps {
    navigation: any,
    customerCreate: (payload: any) => any,
    customer: any,
    connection: boolean
}

interface AddCardState {

}
export class AddCard extends React.Component<AddCardProps, AddCardState> {
    constructor(props: AddCardProps) {
        super(props);
    }
    componentDidMount() {
        SplashScreen.hide();
        this.initCustomer();
    }
    initCustomer = () => {
        const getUser = (retrievedUser: any) => {
            const user = JSON.parse(retrievedUser);
            this.props.customerCreate(user);
        }
        AsyncStorage.getItem("user").then(getUser);
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
                    source={require('../../../assets/app-images/card_payment.png')}
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
                        }}>Add Card</Text>
                </View>
                <Card />
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
        height: '18%',
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