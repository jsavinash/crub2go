import * as React from "react";
import { View, Text, Image, TouchableHighlight } from "react-native";
import { styles } from './account-top-style';
import { NavigationActions } from 'react-navigation';
import { ICustomer } from '@models';
export interface AccountTopProps {
    customer?: ICustomer
}
export const AccountTop: React.StatelessComponent<AccountTopProps> = (props) => {
    const navigateTo = () => {
        NavigationActions.navigate({ routeName: 'EditProfile' })
    }
    const imageRender = () => {
        const ImageStatic =
            <TouchableHighlight onPress={navigateTo}>
                <Image
                    source={require('../../../../assets/app-images/started_user.png')}
                    resizeMode="cover"
                    style={styles.img}>
                </Image>
            </TouchableHighlight>
        const ImagePic =
            <TouchableHighlight onPress={navigateTo}>
                <Image
                    source={{ uri: props['customer']['user_profile'] }}
                    resizeMode="cover"
                    style={styles.img}>
                </Image>
            </TouchableHighlight>
        let ImageSource: any = ImageStatic;
        if (props.customer.user_profile) {
            ImageSource = ImagePic
        }
        return ImageSource;
    }
    return (
        <View style={styles.topContainer}>
            <Text
                style={styles.txt}>My Account</Text>
            <View style={styles.img1}>
                {imageRender}
            </View>
            <Text style={styles.txt1}>{props['customer']['user_name']}</Text>
            <Text style={styles.txt2}>{props['customer']['user_mobile_number']}</Text>
        </View>
    )
}
