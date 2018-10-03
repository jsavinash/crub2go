import * as React from "react";
import { TextInput, View, Image, TouchableOpacity } from "react-native";
import { styles } from './search-style';
export interface SearchProps {
    navigation: any,
}
export const Search: React.StatelessComponent<SearchProps> = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.div1}>
                <View style={styles.div2}>
                 <TouchableOpacity onPress={() => props.navigation.goBack()}>
                    <Image
                        source={require('../../../../assets/app-images/back_btn_s_1a_h.png')}
                        style={styles.img}>
                    </Image>
                    </TouchableOpacity>
                </View>
                <View>
                    <TextInput
                        style={styles.txtField}
                        placeholder={'Search city name'}
                    ></TextInput>
                </View>
            </View>
        </View>
    )
}
