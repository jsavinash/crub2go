import * as React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { styles } from './upload-style';
import PhotoUpload from 'react-native-photo-upload';
import { Images } from "@themes";
import { IRegister } from "@models";
import CompressImage from 'react-native-compress-image';

export interface HeaderProps {
    registerParamsAction: (register: IRegister) => any,
    registerParams: IRegister
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

    private onImageChange = (image: any) => {
        console.log("image", image);
        CompressImage.createCompressedImage(image['uri'], image['path']).then((response: any) => {
            console.log("response", response);
            const { registerParams, registerParamsAction } = this.props;
            const cpyRegisterParams = { ...registerParams };
            cpyRegisterParams['user_profile'] = response;
            registerParamsAction(cpyRegisterParams)
        }).catch((err: any) => {
            console.log("err", err);
            // Oops, something went wrong. Check that the filename is correct and
            // inspect err to get more details.
        });

    }

    render() {
        return (
            <View style={styles.container} >
                <View style={styles.div1}>
                    <PhotoUpload
                        onResponse={(image: any) => {
                            if (image) {
                                this.onImageChange(image);
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
