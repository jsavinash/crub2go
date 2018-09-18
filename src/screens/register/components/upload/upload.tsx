import * as React from "react";
import { View, Image, TouchableOpacity, Dimensions } from "react-native";
import { styles } from './upload-style';
import PhotoUpload from 'react-native-photo-upload';
import { Images } from "@themes";
const SCREEN_HEIGHT = Dimensions.get('window').height;

export interface HeaderProps {

    navigation: any
}
export interface HeaderState {
    isCamera: boolean
}
export class Upload extends React.Component<HeaderProps, HeaderState> {
    constructor(props: HeaderProps) {
        super(props);
        this.state = {
            isCamera: true
        }
    }
    private onCarmera = () => {
        this.setState({ isCamera: false });
        setTimeout(() => {
            this.setState({ isCamera: true });
        }, 1);
    }
    render() {
        return (
            <View style={styles.container} >
                <View style={styles.div1}>
                    <PhotoUpload
                        onResponse={(image: any) => {
                            if (image) {
                                // this.setState({ photo: image });
                            }
                        }}>
                        <Image
                            style={styles.img1}
                            resizeMode='cover'
                            source={Images.STARTED_USER} />

                    </PhotoUpload>

                </View>
                <TouchableOpacity onPress={() => {
                    this.onCarmera()
                }} style={styles.touch}>
                    <Image
                        style={styles.img2}
                        resizeMode='cover'
                        source={
                            this.state['isCamera'] ?
                                Images.CAMERA_OPEN
                                :
                                Images.CAMERA_CLOSE
                        }
                    />
                </TouchableOpacity>
            </View>
        )
    }
}
