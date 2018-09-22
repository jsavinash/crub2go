import * as React from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";
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
                    return (
                        <View style={styles.container}>
                            <TouchableOpacity
                                onPress={() => {
                                    selectedCity(city)
                                }}
                                key={idx}
                            >
                                <View style={styles.div1}>
                                    <View>
                                        <Text style={styles.txt}>{city.city_name}</Text>
                                    </View>
                                    {city.city_id == props.customer['user_city_id'] ?
                                        <View>
                                            <Image
                                                source={require('../../../../assets/app-images/back_btn_s_1a_h.png')}
                                                style={styles.img}>
                                            </Image>
                                        </View>
                                        :
                                        <View />
                                    }
                                </View>
                            </TouchableOpacity>
                        </View>
                    );
                })
            }
        </View>
    )
}
