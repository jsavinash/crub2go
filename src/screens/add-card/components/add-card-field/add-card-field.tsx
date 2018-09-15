import * as React from "react";
import { View, Image } from "react-native";
import { styles } from './add-card-field-style';
import { TextField } from 'react-native-material-textfield';

export const AddCardField: React.StatelessComponent<{}> = () => {
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
                            source={require('../../../../assets/app-images/user_active.png')}
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
                            source={require('../../../../assets/app-images/card_deactive.png')}
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
                                source={require('../../../../assets/app-images/calndr_icon_h.png')}
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
                                source={require('../../../../assets/app-images/img_changepass.png')}
                                style={styles.image}
                            ></Image>
                        </View>
                    </View>
                </View>
            </View>
        )
    
}

