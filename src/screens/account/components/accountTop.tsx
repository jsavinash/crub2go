import * as React from "react";
import { Dimensions, View, StyleSheet, Text, Image, TouchableHighlight } from "react-native";
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
export interface AccountTopProps {
    navigation?: any,
    customer: any
}
interface AccountTopState {

}
export class AccountTop extends React.Component<AccountTopProps, AccountTopState> {
    constructor(props: AccountTopProps) {
        super(props);
    }
    onImageClick = () => {
        const { navigation } = this.props;
        navigation.navigate('EditProfile');
    }

    render() {
        const ImageStatic =
            <TouchableHighlight onPress={this.onImageClick}>
                <Image
                    source={require('../../../assets/app-images/started_user.png')}
                    resizeMode="cover"
                    style={styles.img}>
                </Image>
            </TouchableHighlight>
        const ImagePic =
            <TouchableHighlight onPress={this.onImageClick}>
                <Image
                    source={{ uri: this.props.customer.user_profile }}
                    resizeMode="cover"
                    style={styles.img}>
                </Image>
            </TouchableHighlight>
            
        let ImageSource: any = ImageStatic;
        if (this.props.customer.user_profile) {
            ImageSource = ImagePic
        }
        return (
            <View style={styles.topContainer}>
                <Text
                    style={styles.txt}>My Account</Text>
                <View style={styles.img1}>
                    {ImageSource}
                </View>
                <Text style={styles.txt1}>{this.props.customer.user_name}</Text>
                <Text style={styles.txt2}>{this.props.customer.user_mobile_number}</Text>
            </View>
        )
    }
}
var styles = StyleSheet.create({
    topContainer: {
        alignItems: 'center'
    },
    txt: {
        marginTop: '8%',
        color: 'white',
        fontSize: 22,
    },

    img1: {
        marginTop: '8%',
        width: ((SCREEN_WIDTH * 35) / 100),
        height: ((SCREEN_HEIGHT * 20) / 100),
        borderWidth: 1,
        backgroundColor: 'white',
        borderRadius: 22,
        borderColor: 'transparent',
        alignItems: 'center'
    },
    img: {
        width: ((SCREEN_WIDTH * 35) / 100),
        height: ((SCREEN_HEIGHT * 20) / 100),
        borderRadius: 22
    },
    txt1: {
        marginTop: '2%',
        color: 'white',
        fontSize: 22,
    },
    txt2: {
        marginTop: '1%',
        marginBottom: '2%',
        color: 'white',
        fontSize: 18,
    }
});