import * as React from "react";
import { View, Image, Text } from "react-native";
import { styles } from './add-card-field-style';
import { TextField } from 'react-native-material-textfield';
import TextInputMask from 'react-native-text-input-mask';
import { Images } from "@themes";
import { IAddCardState } from "@models";
export interface LoginCardFieldProps {
    cardAddParamsAction: (addCard: IAddCardState) => any,
    cardAddParams: IAddCardState
}

export interface LoginCardFieldState {
    name: string,
    isName: boolean,
    isCardNumber: boolean,
    isExpiry: boolean,
    isCvv: boolean
}
export class AddCardField extends React.Component<LoginCardFieldProps, LoginCardFieldState> {
    constructor(props: LoginCardFieldProps) {
        super(props);
        this.state = {
            name: '',
            isName: false,
            isCardNumber: false,
            isExpiry: false,
            isCvv: false
        };
    }
    private name = (name: string) => {
        const { cardAddParams, cardAddParamsAction } = this.props;
        const cpyCardAddParams = { ...cardAddParams };
        cpyCardAddParams['name'] = name;
        cardAddParamsAction(cpyCardAddParams)
    }

    private cardNumber = (cardNumber: string): any => {
        const { cardAddParams, cardAddParamsAction } = this.props;
        const cpyCardAddParams = { ...cardAddParams };
        cpyCardAddParams['cardNumber'] = cardNumber;
        cardAddParamsAction(cpyCardAddParams)
    }
    private expiryDate = (expiryDate: string) => {
        const { cardAddParams, cardAddParamsAction } = this.props;
        const cpyCardAddParams = { ...cardAddParams };
        cpyCardAddParams['expiryDate'] = expiryDate;
        cardAddParamsAction(cpyCardAddParams)
    }
    private cvv = (cvv: string) => {
        const { cardAddParams, cardAddParamsAction } = this.props;
        const cpyCardAddParams = { ...cardAddParams };
        cpyCardAddParams['cvv'] = cvv;
        cardAddParamsAction(cpyCardAddParams)
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.txtField}>
                    <View style={styles.txtFieldIn}>
                        <TextField label='Name on Card'
                            baseColor='#aaa'
                            textColor='black'
                            tintColor="#ACD472"
                            lineWidth={2}
                            animationDuration={60}
                            onChangeText={(cardNumber: string) => {
                                this.name(cardNumber)
                            }}
                            onFocus={() =>
                                this.setState({ isName: true })
                            }
                            onBlur={() => {
                                this.setState({ isName: false })
                            }}
                        />
                    </View>
                </View>
                <View>
                    <View style={styles.txtField}>
                        <View style={{
                        }}>
                            <Text style={this.state['isCardNumber'] ? {
                                color: '#ACD472'
                            } : {}}>Card Number</Text>
                        </View>
                        <View style={{
                            flexDirection: 'row'
                        }}>
                            <View style={styles.div1}>
                                <Image
                                    source={
                                        this.state['isCardNumber'] ?
                                            Images['CARD_ACTIVE']
                                            :
                                            Images['CARD_INACTIVE']
                                    }
                                    resizeMode={'contain'}
                                    style={styles.image2}
                                ></Image>
                            </View>
                            <View>
                                <TextInputMask
                                    placeholder={'1234 1234 1234 1234'}
                                    refInput={cardNum => { this.input1 = cardNum }}
                                    onChangeText={(formatted: any, extracted: any) => {
                                        this.cardNumber(extracted);
                                    }}
                                    mask={"[0000] [0000] [0000] [0000]"}
                                    style={{
                                        width: 300
                                    }}
                                    onFocus={() =>
                                        this.setState({ isCardNumber: true })
                                    }
                                    onBlur={() => {
                                        this.setState({ isCardNumber: false })
                                    }}
                                />
                            </View>
                        </View>
                    </View>
                    <View style={this.state['isCardNumber'] ? styles.borderActive : styles.borderInactive}>
                    </View>
                </View>
                <View style={styles.div2}>
                    <View style={styles.div3}>

                        <View style={{
                            flexDirection: 'column',
                            marginTop: '3%'
                        }}>
                            <View style={{
                            }}>
                                <Text style={this.state['isExpiry'] ? {
                                    color: '#ACD472'
                                } : {}}>Expiry Date</Text>
                            </View>
                            <View style={{
                                flexDirection: 'row'
                            }}>
                                <View style={styles.div1}>
                                    <Image
                                        source={

                                            this.state['isExpiry'] ?
                                                Images['CALENDER_ACTIVE']
                                                :
                                                Images['CALENDER_INACTIVE']
                                        }
                                        resizeMode={'contain'}
                                        style={styles.image2}
                                    ></Image>
                                </View>
                                <View>
                                    <TextInputMask
                                        placeholder={'Expiry date'}
                                        refInput={expiry => { this.input2 = expiry }}
                                        onChangeText={(formatted: any, extracted: any) => {
                                            this.expiryDate(formatted);
                                        }}
                                        style={{
                                            width: 150
                                        }}
                                        mask={"[00]/[00]"}
                                        onFocus={() =>
                                            this.setState({ isExpiry: true })
                                        }
                                        onBlur={() => {
                                            this.setState({ isExpiry: false })
                                        }}

                                    />
                                </View>
                            </View>
                        </View>
                        <View style={this.state['isExpiry'] ? styles.borderActive : styles.borderInactive} />
                    </View>
                    <View style={{
                        width: "48%",
                        flexDirection: 'column',
                        marginTop: '1.6%'
                    }}>
                        <View style={{
                        }}>
                            <Text style={this.state['isCvv'] ? {
                                color: '#ACD472'
                            } : {}}>CVV</Text>
                        </View>
                        <View style={styles.txtField12}>
                            <View style={{
                                alignSelf: 'center'
                            }}>
                                <Image
                                    source={
                                        this.state['isCvv'] ?
                                            Images['LOCKER_ACTIVE']
                                            :
                                            Images['LOCKER_INACTIVE']
                                    }
                                    resizeMode={'contain'}
                                    style={{
                                        height: 30,
                                        width: 30,
                                    }}
                                ></Image>
                            </View>
                            <View>
                                <TextInputMask
                                    placeholder={'123'}
                                    refInput={cvvRef => { this.input3 = cvvRef }}
                                    onChangeText={(formatted: any, extracted: any) => {
                                        this.cvv(extracted);
                                    }}
                                    style={{
                                        width: 150
                                    }}
                                    mask={"[000]"}
                                    onFocus={() =>
                                        this.setState({ isCvv: true })
                                    }
                                    onBlur={() => {
                                        this.setState({ isCvv: false })
                                    }}
                                />
                            </View>
                        </View>
                        <View style={this.state['isCvv'] ? styles.borderActive : styles.borderInactive} />

                    </View>
                </View>
            </View >
        )
    }

}

