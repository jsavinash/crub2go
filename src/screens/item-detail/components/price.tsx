import * as React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
export interface PriceProps {
    value: any
}

interface PriceState {
    count: number
}
export class Price extends React.Component<PriceProps, PriceState> {
    constructor(props: PriceProps) {
        super(props);
        this.state = {
            count: 1
        }
    }
    private increment = () => {
        let { count } = this.state;
        let incrementCount: number = count + 1;
        this.setState({ count: incrementCount });
    }
    private decrement = () => {
        let { count } = this.state;
        if (count > 1) {
            let decrementCount: number = count - 1;
            this.setState({ count: decrementCount });
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.content}>
                    <Text style={styles.contentTxt}>Original Price: </Text><Text style={{
                        color: '#ACD472',
                        fontSize: 18,
                    }}>$ {this.props.value}</Text>
                </View>
                <View style={styles.imageCtn}>
                    <TouchableOpacity onPress={() => {
                        this.decrement();
                    }}>
                        <Image
                            source={require('../../../assets/app-images/unsilrk_minus_s_4a.png')}
                            style={styles.minusImage}
                        ></Image>
                    </TouchableOpacity>
                    <Text style={styles.counter}>{this.state.count}</Text>
                    <TouchableOpacity onPress={() => {
                        this.increment();
                    }}>
                        <Image
                            source={require('../../../assets/app-images/unsilrk_pluce_s_4a.png')}
                            style={styles.plusImage}
                        ></Image>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

var styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        height: '12%',
        width: '100%',
        backgroundColor: 'white'
    },
    content: {
        alignSelf: 'center',
        marginLeft: '2%',
        flexDirection: 'row'
    },
    contentTxt: {
        color: '#aaa',
        fontSize: 14
    },
    imageCtn: {
        flexDirection: 'row',
        alignSelf: 'center'
    },
    minusImage: {
        height: 23,
        width: 23,
    },
    plusImage: {
        height: 23,
        width: 23,
        marginLeft: '2%'
    },
    counter: {
        marginLeft: 14,
        marginRight: 14,
        fontSize: 18,
        color: 'black'
    }
});