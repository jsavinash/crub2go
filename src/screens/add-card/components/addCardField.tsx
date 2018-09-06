import * as React from "react"
import { View, StyleSheet, Image } from "react-native"
import { TextField } from 'react-native-material-textfield';
export interface Props {

}
interface State {

}
export class AddCardField extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
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
                            lineWidth={2}
                            animationDuration={60}
                        />
                        <Image
                            source={require('../../../assets/app-images/user_active.png')}
                            style={styles.image}
                        ></Image>
                    </View>
                </View>



                <View style={styles.txtField}>
                    <View style={styles.txtFieldIn}>
                        <TextField label='Card Number'
                            baseColor='#aaa'
                            textColor='black'
                            tintColor="#ACD472"
                            lineWidth={2}
                            animationDuration={60}
                        />
                        <Image
                            source={require('../../../assets/app-images/card_deactive.png')}
                            style={styles.image}
                        ></Image>
                    </View>
                </View>
                <View style={{ flexDirection: 'row' }}>

                    <View style={styles.txtField1}>
                        <View style={styles.txtFieldIn1}>
                            <TextField label='Expiry Date'
                                baseColor='#aaa'
                                textColor='black'
                                tintColor="#ACD472"
                                lineWidth={2}
                                animationDuration={60}
                            />
                            <Image
                                source={require('../../../assets/app-images/calndr_icon_h.png')}
                                style={styles.image}
                            ></Image>
                        </View>
                    </View>
                    <View style={styles.txtField1}>
                        <View style={styles.txtFieldIn1}>
                            <TextField label='CVV'
                                baseColor='#aaa'
                                textColor='black'
                                tintColor="#ACD472"
                                lineWidth={2}
                                animationDuration={60}
                            />
                            <Image
                                source={require('../../../assets/app-images/img_changepass.png')}
                                style={styles.image}
                            ></Image>
                        </View>
                    </View>

                </View>


            </View>
        )
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 0.7,
        margin: 14,
    },
    image: {
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
    },
    txtField1: {
        flexDirection: 'row',
        marginLeft: '2%',
        width: '50%'
    },
    txtFieldIn1: {
        width: '100%'
    }
    
});