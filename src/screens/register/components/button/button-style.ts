import { StyleSheet, Dimensions } from "react-native";
const SCREEN_HEIGHT = Dimensions.get('window').width;
export const styles = StyleSheet.create({
      container: {
        bottom: '5%',
        marginLeft: '66%'
    },
    image: {
        width: ((SCREEN_HEIGHT * 32) / 100),
        height: ((SCREEN_HEIGHT * 32) / 100),
        borderRadius: 100,
    }
});