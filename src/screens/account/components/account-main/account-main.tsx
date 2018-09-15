import * as React from "react";
import { View } from "react-native";
import { AccountTop, AccountBottom } from '../';

export const AccountMain: React.StatelessComponent<{}> = () => {
    return (
        <View>
            <AccountTop />
            <AccountBottom />
        </View>
    )
}
