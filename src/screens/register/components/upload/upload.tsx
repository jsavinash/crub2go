import * as React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { styles } from './upload-style';
import PhotoUpload from 'react-native-photo-upload';
import { Images } from "@themes";
import { IRegister } from "@models";
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
        const { registerParams, registerParamsAction } = this.props;
        const cpyRegisterParams = { ...registerParams };
        cpyRegisterParams['user_profile'] = image;
        registerParamsAction(cpyRegisterParams)
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
