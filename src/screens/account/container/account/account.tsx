import * as React from "react"
import { ImageBackground, ScrollView, View } from "react-native";
import { AccountMain } from '../../components';
import { styles } from './account-style';
import { ICustomer } from '@models';
import { NavigationActions } from 'react-navigation';
export interface AccountProps {
    customer: ICustomer,
    navigation: any
}
export interface AccountState {

}
export class Account extends React.Component<AccountProps, AccountState> {
    constructor(props: AccountProps) {
        super(props)
        if (!this.props.customer['user_access_token'])
            this.props.navigation.dispatch(NavigationActions.reset(
                {
                    index: 0,
                    actions: [
                        NavigationActions.navigate({ routeName: 'Login' })
                    ]
                }));
    }
    componentDidMount() {

    }
    render() {
        if (this.props.customer['user_access_token']) {
            return (
                <ScrollView>
                    <ImageBackground
                        source={require('../../../../assets/app-images/bg.png')}
                        style={styles.bgImage}>
                        <AccountMain />
                    </ImageBackground>
                </ScrollView >
            )
        } else {
            return (
                <View></View>
            )
        }
    }
}
