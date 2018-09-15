import * as React from "react"
import { View } from "react-native";
import { styles } from './add-card-bottom-style';
import { Button } from 'react-native-elements';

export const AddCardBottom: React.StatelessComponent<{}> = () => {
    const submitLoginCredentials = () => {

    }
    return (
        <View style={styles.container}>
            <View style={styles.containerIn}>
                <Button
                    onPress={submitLoginCredentials}
                    title="Submit"
                    buttonStyle={styles.containerInBtnStyle}
                    containerViewStyle={styles.containerInBtnCnt} />
            </View>
        </View>
    )
}

