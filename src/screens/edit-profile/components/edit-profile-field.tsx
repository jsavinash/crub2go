import * as React from "react"
import { View, StyleSheet, Image } from "react-native"
import { TextField } from 'react-native-material-textfield';
import {
    ErrTitle,
    ErrNameMsg
} from '@constant';
import { showAlert } from '@common_service';

export interface EditProfileFieldProps {
    isFieldDataFetch: boolean,
    customer: any,
    passData: (obj: any, isPassed: boolean) => any
}
interface EditProfileFieldState {
    isName: boolean,
    name: string
}
export class EditProfileField extends React.Component<EditProfileFieldProps, EditProfileFieldState> {
    constructor(props: EditProfileFieldProps) {
        super(props);
        this.state =
            {
                isName: false,
                name: ''
            };
    }

    componentDidMount(){
        this.initState();
    }
    initState = () => {
        this.setState({ name : this.props.customer.user_name });
    }

    passDataToCard = (isPassed: boolean) => {
        this.props.passData({
            username: this.state.name,
        }, isPassed);
    }

    componentWillReceiveProps(nextProps: any) {
        const { name } = this.state;
        if (nextProps.isFieldDataFetch) {
            if (!name) {
                showAlert(ErrTitle, ErrNameMsg, 'danger');
                this.passDataToCard(false);
                return;
            }
            this.passDataToCard(true);
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.txtField}>
                    <View style={styles.txtFieldIn}>
                        <TextField label='Name'
                            baseColor='#aaa'
                            textColor='black'
                            tintColor="#ACD472"
                            value={this.state.name}
                            lineWidth={2}
                            animationDuration={60}
                            onFocus={() => {
                                this.setState({ isName: true });
                            }}
                            onBlur={() => {
                                this.setState({ isName: false });
                            }}
                            onChangeText={(name: string) => this.setState({ name })}
                        />
                        <Image
                            source={
                                this.state.isName ?
                                    require('../../../assets/app-images/user_active.png') :
                                    require('../../../assets/app-images/user_deactive.png')
                            }
                            style={styles.image}
                        ></Image>
                    </View>
                </View>
            </View>
        )
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 0.8,
        margin: 14,
    },
    image: {
        height: 40,
        width: 40,
        position: 'absolute',
        right: 0,
        marginTop: 25
    },
    imageEye: {
        height: 35,
        width: 40,
        position: 'absolute',
        right: 0,
        marginTop: 25
    },
    txtField: {
        flexDirection: 'row'
    },
    txtFieldIn: {
        width: '100%'
    }
});