import * as React from "react"
import { Dimensions, ImageBackground, StyleSheet, ScrollView } from "react-native";
import SplashScreen from 'react-native-splash-screen';
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
import { AccountMain } from '../components';
import Toaster from 'anx-react-native-toaster';

export interface Props {
    navigation: any
}
interface State {

}

export class Account extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }
    componentDidMount() {
        SplashScreen.hide();
        this.showToaster();
    }

    showToaster = () => {
        setTimeout(() => {
            Toaster.show('Awesome', Toaster.SHORT);
         }, 3000);
    }

    navigateTo = (screen: string): any => {
        this.props.navigation.navigate(`${screen}`);
    };

    render() {
        return (
            <ScrollView>
                <ImageBackground
                    source={require('../../../assets/app-images/bg.png')}
                    style={styles.bgImage}>
                    <AccountMain navigation={this.props.navigation} />
                </ImageBackground>
            </ScrollView>
        )
    }
}
var styles = StyleSheet.create({
    bgImage: {
        flex: 1,
        top: 0,
        left: 0
    },
    topContainer: {
        alignItems: 'center'
    },
    txt: {
        marginTop: '8%',
        color: 'white',
        fontSize: 22,
    },
    img: {
        marginTop: '8%',
        width: 150,
        height: 150,
        borderWidth: 1,
        backgroundColor: 'white'
    },
    image: {
        height: 20,
        width: 20,
        position: 'absolute',
        left: 0
    },
    txt1: {
        marginTop: '2%',
        color: 'white',
        fontSize: 22,
    },
    txt2: {
        marginTop: '2%',
        color: 'white',
        fontSize: 18,
    },
    shadowView: {
        height: '22.2%',
        width: '100%',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        backgroundColor: '#f3f3f3'
    },
    shadowTxt: {
        marginLeft: '10%',
        alignContent: 'flex-start',
        marginTop: '4%',
        fontSize: 17,
        color: '#9b9b9b'
    },


    bottomContainer: {
        width: ((SCREEN_WIDTH * 90) / 100),
        alignSelf: 'center',
        borderColor: '#f3f3f3',
    },
    regularView: {
        flexDirection: 'row',
        height: '10%',
        width: '100%',
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderBottomColor: '#f3f3f3',
    },
    regularTxt: {
        marginLeft: 30,
        alignContent: 'flex-start',
        marginTop: '4%',
        fontSize: 15,
        color: '#9b9b9b'
    },
    btmTopDiv: {
        height: ((SCREEN_HEIGHT * 9) / 100),
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        backgroundColor: '#f3f3f3'
    },
    btmTopDiv1: {
        height: ((SCREEN_HEIGHT * 9) / 100),
        backgroundColor: '#f3f3f3'
    },
    shadowView12: {
        height: ((SCREEN_HEIGHT * 9) / 100),
        backgroundColor: 'white',
        paddingLeft: '3%',
        paddingRight: '3%'
    },
    borderBottomQ: {
        borderBottomWidth: 1,
        borderBottomColor: '#aaa',
    },
    shadowViewQ: {
        height: ((SCREEN_HEIGHT * 9) / 100),
        backgroundColor: 'white',
        paddingLeft: '3%',
        paddingRight: '3%'
    },
    shadowView1: {
        height: ((SCREEN_HEIGHT * 9) / 100),
        backgroundColor: 'white',
        borderBottomWidth: 2,
        borderBottomColor: '#aaa',
    },

    shadowView123: {
        height: ((SCREEN_HEIGHT * 9) / 100),
        backgroundColor: 'white',
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
    },
    shadowImg: {
        marginLeft: '5%',
        marginTop: '2%',
        height: 40,
        width: 40,
        left: 0
    },
    shadowTxt1: {
        marginLeft: '5%',
        marginTop: '5%',
    }
});