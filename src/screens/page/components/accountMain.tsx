import * as React from "react";
import { View } from "react-native";
import { AccountTop, AccountBottom } from './';
export interface AccountMainProps {
    navigation?: any
}

interface AccountMainState {

}
export class AccountMain extends React.Component<AccountMainProps, AccountMainState> {
    constructor(props: AccountMainProps) {
        super(props);
    }
    render() {
        return (
            <View>
                <AccountTop navigation={this.props.navigation}/>
                <AccountBottom navigation={this.props.navigation}/>
            </View>
        )
    }
}
