import { AsyncStorage } from "react-native"

export const storeAsync = async (key: any, value: any) => {
    try {
        await AsyncStorage.setItem(key, value);
    } catch (error) {
        console.log(`Error while storing key ${key} with data ${value}`);
    }
}

export const retrieveAsync = async (key: any) => {
    let value: any = '';
    try {
        value = await AsyncStorage.getItem(key);
        if (value !== null && value !== '')
        return value;
    } catch (error) {
        console.log(`Error while retrieving key ${key}`);
    }
   
}

export const removeAsync = async (key: any) => {
    try {
        await AsyncStorage.removeItem(key);
    } catch (error) {
        console.log(`Error while removing key ${key}`);
    }
}

