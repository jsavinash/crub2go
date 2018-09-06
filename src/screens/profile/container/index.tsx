import * as React from "react"
import { Dimensions, ImageBackground, StyleSheet, View, TouchableOpacity, Text, Image } from "react-native";
import SplashScreen from 'react-native-splash-screen';
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
import { ProfileCard } from '../components';
export interface Props {
    navigation: any
}
interface State {

}
export class Profile extends React.Component<Props, State> {
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
                <View
                    style={styles.header}
                >
                    <Text style={styles.headerIn}>My Profile</Text>
                </View>
                <View style={styles.headerImg}>
                    <Image
                        source={require('../../../assets/app-images/started_user.png')}
                        style={styles.headerImgStyle}
                    >
                    </Image>
                </View>
                <ProfileCard/>
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
        marginTop: '2%',
        alignItems: 'center'
    },
    headerIn: {
        color: 'white',
        fontSize: 20
    },
    headerImg: {
        alignSelf: 'center',
        height: '15%',
        width: '25%',
        backgroundColor: 'white',
        marginTop: 4,
        marginBottom: 10
    },
    headerImgStyle: {
        height: '100%',
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
        height: '30%',
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