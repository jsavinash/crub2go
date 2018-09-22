import * as React from "react";
import { View, Image } from "react-native";
import { styles } from './add-card-field-style';
import { TextField } from 'react-native-material-textfield';
import TextInputMask from 'react-native-text-input-mask';


export interface LoginCardFieldProps {

}

interface LoginCardFieldState {
    name: string,
    cardNumber: string,
    expiryDate: string
    cvv: string
}

export class AddCardField extends React.Component<LoginCardFieldProps, LoginCardFieldState> {
    constructor(props: LoginCardFieldProps) {
        super(props);
        this.state = {
            name: '',
            cardNumber: '        ',
            expiryDate: '',
            cvv: ''
        };
    }
    private name = (name: string): any => {
        this.setState({ name });
    }
    private cardNumber = (cardNumber: string): any => {
        let cardNumberArray = cardNumber.split("");
        let newcardNumberArray: any = [];
        cardNumberArray.map((x: any, index: number) => {
            console.log("index", index);
            if ((index + 1) % 4 == 0) {
                newcardNumberArray.push(' ');
                newcardNumberArray.push(x);
            } else {
                newcardNumberArray.push(x);

            }
        })
        this.setState({ cardNumber: newcardNumberArray.toString() });
    }


    private expiryDate = (expiryDate: string) => {
        this.setState({ expiryDate });
    }
    private cvv = (cvv: string) => {
        this.setState({ cvv });
    }
    render() {

        return (
            <View style={styles.container}>
                <View style={styles.txtField}>
                    <View style={styles.txtFieldIn}>
                        <TextField label='Name on Card'
                            value={this.state.name}
                            baseColor='#aaa'
                            textColor='black'
                            tintColor="#ACD472"
                            lineWidth={2}
                            animationDuration={60}
                            onChangeText={(cardNumber: string) => {
                                this.name(cardNumber)
                            }}
                        />
                    </View>
                </View>
                <View>
                    <View style={styles.txtField}>
                        <View style={{
                            alignSelf: 'center'
                        }}>
                            <Image
                                source={require('../../../../assets/app-images/card_deactive.png')}
                                resizeMode={'contain'}
                                style={{
                                    height: 30,
                                    width: 30,
                                }}
                            ></Image>
                        </View>
                        <View>
                            <TextInputMask
                                refInput={ref => { this.input = ref }}
                                onChangeText={(formatted: any, extracted: any) => {
                                    console.log(formatted) // +1 (123) 456-78-90
                                    console.log(extracted) // 1234567890
                                }}
                                mask={"+1 ([000]) [000] [00] [00]"}
                            />
                        </View>
                    </View>
                    <View style={{
                        borderBottomWidth: 2,
                        borderBottomColor: '#aaa'
                    }}>
                    </View>
                </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}>
                    <View style={{
                        width: "48%"
                    }}>





                        <View style={styles.txtField}>
                            <View style={{
                                alignSelf: 'center'
                            }}>
                                <Image
                                    source={require('../../../../assets/app-images/card_deactive.png')}
                                    resizeMode={'contain'}
                                    style={{
                                        height: 30,
                                        width: 30,
                                    }}
                                ></Image>
                            </View>
                            <View>
                                <TextInputMask
                                    refInput={ref => { this.input = ref }}
                                    onChangeText={(formatted: any, extracted: any) => {
                                        console.log(formatted) // +1 (123) 456-78-90
                                        console.log(extracted) // 1234567890
                                    }}
                                    mask={"+1 ([000]) [000] [00] [00]"}
                                />
                            </View>
                        </View>
                        <View style={{
                            borderBottomWidth: 2,
                            borderBottomColor: '#aaa'
                        }}>
                        </View>







                    </View>


                    <View style={{
                        width: "48%"

                    }}>

                        <View style={styles.txtField}>
                            <View style={{
                                alignSelf: 'center'
                            }}>
                                <Image
                                    source={require('../../../../assets/app-images/card_deactive.png')}
                                    resizeMode={'contain'}
                                    style={{
                                        height: 30,
                                        width: 30,
                                    }}
                                ></Image>
                            </View>
                            <View>
                                <TextInputMask
                                    refInput={ref => { this.input = ref }}
                                    onChangeText={(formatted: any, extracted: any) => {
                                        console.log(formatted) // +1 (123) 456-78-90
                                        console.log(extracted) // 1234567890
                                    }}
                                    mask={"+1 ([000]) [000] [00] [00]"}
                                />
                            </View>
                        </View>
                        <View style={{
                            borderBottomWidth: 2,
                            borderBottomColor: '#aaa'
                        }}>
                        </View>
                    </View>
                </View>
            </View>
        )
    }

}

