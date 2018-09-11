import * as React from "react"
import { ScrollView, StyleSheet, Image } from "react-native"
export interface PaymentProps {

}
interface PaymentState {

}
export class Payment extends React.Component<PaymentProps, PaymentState> {
    constructor(props: PaymentProps) {
        super(props)
    }
    render() {
        return (
            <ScrollView>
                <Image
                    source={require('../../../assets/app-images/img_americanexp.png')}
                    style={styles.image}>
                </Image>
                <Image
                    source={require('../../../assets/app-images/img_mastrcrd.png')}
                    style={styles.image}>
                </Image>
                <Image
                    source={require('../../../assets/app-images/img_visa.png')}
                    style={styles.image}>
                </Image>
            </ScrollView>
        )
    }
}


const styles = StyleSheet.create({
    image: {
        height: 200,
        width: 350,
        margin: 5,
        borderRadius: 20
    }
})