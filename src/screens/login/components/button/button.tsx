import * as React from "react";
import { TouchableOpacity } from "react-native";
import { styles } from './button-style';
import { Icon } from 'react-native-elements';
import { ILogin } from '@models';
import { showAlert, logger } from '@common_service';
import {
    ErrTitle,
    ErrMobileOrEmailMsg,
    ErrPasswordMsg
} from '@constant';
export interface ButtonProps {
    loginParams: ILogin
}
export const Button: React.StatelessComponent<ButtonProps> = (props) => {
    const submit = () => {
        console.log(" props.loginParams", props.loginParams);
        const { user_name, user_password } = props.loginParams;
        if (!user_name) {
            showAlert(ErrTitle, ErrMobileOrEmailMsg, 'danger');
            return;
        }
        if (!user_password) {
            showAlert(ErrTitle, ErrPasswordMsg, 'danger');
            return;
        }




        

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
