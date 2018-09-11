import * as React from "react";
import { StyleSheet, View, Text, Image } from 'react-native';
import { Button } from 'react-native-elements';

export interface AddToCartProps {
}

interface AddToCartState {

}
export class AddToCart extends React.Component<AddToCartProps, AddToCartState> {
    constructor(props: AddToCartProps) {
        super(props);
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.content}>
                    <Button
                        onPress={() => { }}
                        title="ADD TO CART"
                        buttonStyle={styles.containerInBtnStyle}
                        containerViewStyle={styles.containerInBtnCnt} />
                </View>
                <View style={styles.imageCtn}>
                    <Text style={{
                        marginLeft: '4%',
                        fontSize: 20,
                        color: 'black'
                    }}>$125.00</Text>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        height: '9%',
        width: '100%',
        backgroundColor: 'white',
    },
    content: {
        width: '50%'
    },
    contentTxt: {
        color: 'black',
        fontSize: 14
    },
    imageCtn: {
        alignSelf: 'center',
    },
    image: {
        height: 35,
        width: 35,
        left: 0
    },
    containerInBtnStyle: {
        backgroundColor: '#ACD472',
        borderColor: 'transparent',
        borderWidth: 1,
        borderRadius: 30
    },
    containerInBtnCnt: {
        width: '100%'
    }
});

// var styles = StyleSheet.create({
//     container: {
//         position: 'absolute',
//         bottom: 0,
//         width: '100%',
//         height: '8%',
//         backgroundColor: 'white'
//     },

//     containerInBtnStyle: {
//         backgroundColor: '#ACD472',
//         borderColor: 'transparent',
//         borderWidth: 1,
//         borderRadius: 30
//     },

// });





 // <View style={styles.container}>
            //     <View style={{
            //         flexDirection: 'row',
            //     }}>
            //         <View style={{
            //             left: 10,
            //             width: '60%'
            //         }}>
            //             <Button
            //                 onPress={() => { }}
            //                 title="ADD TO CART"
            //                 buttonStyle={styles.containerInBtnStyle}
            //             />
            //         </View>
            //         <View style={{
            //             alignSelf: 'flex-end'
            //         }}>
            //             <Text>$125</Text>
            //         </View>
            //     </View>
            // </View>