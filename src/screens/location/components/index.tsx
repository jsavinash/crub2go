import React from "react"
import { Text, View, StyleSheet } from "react-native"
export interface Props {

}

interface State {
}

export class Location extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
    }
    render() {
        return (
            <View style={styles.root}>
                <Text style={styles.greeting}>
                    Location Screen
               </Text>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    root: {
        backgroundColor: "#e8e8e8",
        height: 'auto',
        position: 'absolute',
        marginTop: 300,
        marginLeft: 100
    },
    greeting: {
        position: "absolute",
        width: 500
    }
})