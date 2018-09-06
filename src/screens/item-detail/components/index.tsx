import * as React from "react"
import { Text, View, StyleSheet, Button } from "react-native"
export interface Props {
    navigation: any
}

interface State {
}

export class ItemDetail extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
    }
    render() {
        return (
            <View style={styles.root}>
                <Text style={styles.greeting}>
                    Item Detail Screen
               </Text>
                <Button
                    title="Go to Details"
                    onPress={() => this.props.navigation.navigate('Details')} />
            </View>

        )
    }
}


const styles = StyleSheet.create({
    root: {
        backgroundColor: "#e8e811",
        height: 'auto',
        position: 'absolute',
        marginTop: 300,
        marginLeft: 80
    },
    greeting: {
        fontSize: 40
    }
})