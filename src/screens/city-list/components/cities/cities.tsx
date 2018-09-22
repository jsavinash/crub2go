import * as React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { styles } from './cities-style';
import { ICustomer, ICities } from '@models';
import { storeAsync } from '@common_service';
import { NavigationActions } from "react-navigation";
export interface CitiesProps {
    customerAction: (customer: ICustomer) => any,
    customer: ICustomer,
    navigation: any,
    cities: ICities[]
}
export const Cities: React.StatelessComponent<CitiesProps> = (props) => {
    const selectedCity = (city: ICities) => {
        const { customer, customerAction } = props;
        const cpyCustomer = { ...customer };
        cpyCustomer['user_city'] = city['city_name'];
        cpyCustomer['user_city_id'] = city['city_id'];
        let cities: ICities = {
            city_id: city['city_id'],
            city_name: city['city_name']
        }
        storeAsync('city', JSON.stringify(cities));
        customerAction(cpyCustomer)
        if (cpyCustomer['user_access_token']) {
            props.navigation.dispatch(NavigationActions.reset(
                {
                    index: 0,
                    actions: [
                        NavigationActions.navigate({
                            routeName: 'Home', params: {
                                screen: "City"
                            }
                        })
                    ]
                }));
        }
        else
            props.navigation.navigate('Home')
    }
    return (
        <View>
            {
                props.cities.map((city, idx) => {
                    console.log("city", city);
                    return (
                        <TouchableOpacity onPress={() => {
                            selectedCity(city)
                        }} key={idx}>
                            <Text style={styles.txt}>{city.city_name}</Text>
                        </TouchableOpacity>
                    );
                })
            }
        </View>
    )
}
