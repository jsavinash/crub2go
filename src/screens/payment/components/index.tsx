import * as React from "react"
import { ScrollView, View, StyleSheet, Image, Text } from "react-native"
export interface Props {

}

interface State {
}

export class Payment extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
    }
    render() {
        return (
            <ScrollView contentContainerStyle={styles.contentContainer}>
                <View style={{
                    height: 40,
                    width: 350,
                    backgroundColor: 'white',
                    alignContent: 'center',
                    alignItems: 'center'
                }}>
                    <Text
                        style={{
                            marginTop: 10,
                            fontSize: 15,
                            color: 'black'
                        }}>Payment Method</Text>
                </View>
                <Image
                    source={require('../../../assets/app-images/img_americanexp.png')}
                    style={{
                        height: 200,
                        width: 350,
                        margin: 5,
                        borderRadius: 20
                    }}>
                </Image>
                <Image
                    source={require('../../../assets/app-images/img_mastrcrd.png')}
                    style={{
                        height: 200,
                        width: 355,
                        margin: 5,
                        borderRadius: 20
                    }}>
                </Image>
                <Image
                    source={require('../../../assets/app-images/img_visa.png')}
                    style={{
                        height: 200,
                        width: 355,
                        margin: 5,
                        borderRadius: 20
                    }}>
                </Image>
            </ScrollView>
        )
    }
}


const styles = StyleSheet.create({
    contentContainer: {
        //   paddingVertical: 20
    }
})