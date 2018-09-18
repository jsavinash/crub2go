import * as React from "react";
import { TouchableOpacity } from "react-native";
import { styles } from './button-style';
import { Icon } from 'react-native-elements';
import { ILogin } from '@models';
export interface ButtonProps {
    loginParams: ILogin
}
export const Button: React.StatelessComponent<ButtonProps> = (props) => {
    const submit = () => {
    console.log('loginParams', props.loginParams);
    }
    return (
        <TouchableOpacity
            style={styles.btnTch}
            onPress={() => {
                submit();
            }}>
            <Icon name={"chevron-right"} size={70} color="white" />
        </TouchableOpacity>
    )
}
