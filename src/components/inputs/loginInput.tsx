
import * as React from 'react';
import { View, TextInput, Image, ImageSourcePropType, StyleProp, ImageStyle, ViewStyle } from 'react-native'

interface Props {
    icon: ImageSourcePropType,
    iconStyle: StyleProp<ImageStyle>,
    label: string,
    wrapperStyle: StyleProp<ViewStyle>
}

export const LoginInput: React.StatelessComponent<Props> = (props) => {
    const renderIcon = () => {
        return <Image source={props.icon} style={props.iconStyle} />
    }
    return (
        <View style={props.wrapperStyle}>
            {props.icon ? renderIcon() : null}
            
            <TextInput
                {...props}
                placeholder={props.label}
                underlineColorAndroid='transparent'
            />
        </View>
    );
};