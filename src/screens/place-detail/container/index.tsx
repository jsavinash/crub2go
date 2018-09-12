import * as React from "react";
import { Text, View, StyleSheet, Dimensions, AsyncStorage, TouchableHighlight, Image } from "react-native";
import SplashScreen from 'react-native-splash-screen';
import { MainContainer } from '../components';
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
export interface PlaceDetailProps {
    navigation: any,
    customerCreate: (payload: any) => any,
    customer: any,
    connection: boolean
}
interface PlaceDetailPropsState {

}
export class PlaceDetail extends React.Component<PlaceDetailProps, PlaceDetailPropsState> {
    constructor(props: PlaceDetailProps) {
        super(props)
    }
    componentDidMount() {
        SplashScreen.hide();
    }
    initCustomer = () => {
        const getUser = (retrievedUser: any) => {
            const user = JSON.parse(retrievedUser);
            this.props.customerCreate(user);
        }
        AsyncStorage.getItem("user").then(getUser);
    }

    render() {
        return (
            <View style={styles.container}>
                <MainContainer />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    card: {
        flex: 1

    },
    cardImg: {
        width: SCREEN_WIDTH,
        height: ((SCREEN_HEIGHT * 28) / 100)
    },
    fav: {
        marginTop: 4,
        right: 4,
        position: 'absolute'
    },

    favImg: {
        height: 30,
        width: 30
    },
    info: {
        bottom: 4,
        right: 4,

        position: 'absolute'
    },
    infoImg: {
        height: 30,
        width: 30,
        marginBottom: ((SCREEN_HEIGHT * 15) / 100)
    },
    cardContent: {
        width: SCREEN_WIDTH,
        height: ((SCREEN_HEIGHT * 15) / 100),
        backgroundColor: 'white',
        borderBottomWidth: 2,
    },


    container: {
        flex: 1
    },

    div1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        backgroundColor: 'white',
        height: '8%',
        borderBottomColor: '#aaa',
        borderBottomWidth: 1
    },
    div2: {
        marginTop: '2%',
        marginLeft: '5%'
    },
    div3: {
        marginTop: '2%',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        marginLeft: 0
    },
    div3Txt1: {
        fontSize: 14,
        color: '#ACD472'
    },
    div3Txt2: {
        color: 'black',
        fontSize: 16,
        fontWeight: '600'
    },
    scrollContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    scrollContainer1: {
        marginTop: '2%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    content1left: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        color: 'black',
        fontSize: 16,
        marginLeft: '2%'
    },

    content1leftHeading: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        color: 'black',
        fontSize: 20,
        fontWeight: '400',
        marginLeft: '5%'
    },
    content1right: {
        marginRight: "2%"
    },
    content2left: {
        flex: 1,
        flexDirection: 'row',
        fontSize: 12,
        justifyContent: 'flex-start',
        marginLeft: '5%',
        color: '#aaa',
    },
    content2right: {
        marginRight: "5%"
    },
    content2right1: {
        marginRight: "5%",
        color: '#ACD472',
        fontSize: 22,
        fontWeight: '500'
    }
})