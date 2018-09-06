
import * as React from 'react';
import { Text, TouchableOpacity, StyleProp, TextStyle, ViewStyle } from 'react-native';

interface Props {
    onPress: () => void,
    style: StyleProp<ViewStyle>,
    text: string,
    textStyle: StyleProp<TextStyle>
}

const LoginButton: React.StatelessComponent<Props> = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress} style={props.style}>
            <Text style={props.textStyle}>
                {props.text}
            </Text>
        </TouchableOpacity>
    );
};

export default LoginButton;