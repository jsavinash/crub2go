import * as React from "react"
import { StyleSheet, View } from "react-native";
import { Button } from 'react-native-elements';
interface EditProfileBottomProps {
    onSubmitPress: (isPress: boolean) => any
}
export const EditProfileBottom: React.StatelessComponent<EditProfileBottomProps> = (props) => {
    return (
        <View style={styles.container}>
            <Button
                onPress={() => { props.onSubmitPress(true) }}
                title="Submit"
                buttonStyle={styles.containerInBtnStyle}
                containerViewStyle={styles.containerInBtnCnt} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 0.8,
        width: '100%',
        height: 20,
        marginTop: '5%',
        marginBottom: '5%'
    },
    containerIn: {
        width: '100%',
        flexDirection: 'row',
        marginLeft: '5%',
        marginTop: '5%'
    },
    txtTouch: {
        marginTop: '1%',
    },
    containerInTxt: {
        alignSelf: 'flex-start',
    },
    containerInBtnStyle: {
        backgroundColor: '#ACD472',
        borderColor: 'transparent',
        borderWidth: 1,
        borderRadius: 30
    },
    containerInBtnCnt: {
        width: '30%',
        marginLeft: '10%',
        alignSelf: 'flex-end'
    }
});