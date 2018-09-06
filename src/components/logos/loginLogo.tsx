
import * as React from 'react';
import { Image, ImageSourcePropType, StyleProp, ImageStyle } from 'react-native'

interface Props {
  image: ImageSourcePropType,
  style: StyleProp<ImageStyle>
}

export const LoginLogo: React.StatelessComponent<Props> = (props) => {
  return (
    <Image
      resizeMode='contain'
      source={props.image}
      style={props.style}
    />
  );
};