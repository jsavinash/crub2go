import * as React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Dimensions, TextInput } from "react-native";
import { ICities, } from '@models';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { CitiesRestService } from '../../../services';
import { showAlert, logger, storeAsync } from '@common_service';
import {
    InternalServerError,
    InternalServerErrorTitle
} from '@constant';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
export interface Props {
    navigation: any,
    customerAction: (customer: any) => any,
    cityAction: (cities: any) => any,
    cities: ICities[],
    customer: any,

}
interface State {

}
export class CityList extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
    }
    componentDidMount() {
        this.getCities();
    }

    getCities = () => {
        let _self = this;
        CitiesRestService.listCities().then((citiesData: any) => {
            if (citiesData['data']['settings']['success'] == 1) {
                _self.props.cityAction(citiesData['data']['data']);
            } else if (citiesData['data']['settings']['success'] == 0) {
                _self.props.cityAction([]);
            }
        }).catch((error) => {
            logger('City', 'ERROR', error);
            showAlert(InternalServerErrorTitle, InternalServerError, 'warning');
        })
    }
    selectedCity = (city: ICities) => {
        const _self = this;
        const { customer, customerAction } = this.props;
        const cpyCustomer = { ...customer };
        cpyCustomer['user_city'] = city['city_name'];
        cpyCustomer['user_city_id'] = city['city_id'];
        let cities: ICities = {
            city_id: city['city_id'],
            city_name: city['city_name']
        }
        storeAsync('city', JSON.stringify(cities));
        customerAction(cpyCustomer)
        if (cpyCustomer['user_access_token'])
            _self.props.navigation.goBack();
        else
            _self.props.navigation.navigate('Home')
    }
    render() {
        return (
            <View style={styles.container} >
                <View style={styles.header}>
                    <KeyboardAwareScrollView>
                        <TextInput
                            style={{
                                width: SCREEN_WIDTH
                            }}
                            placeholder={'Serach city name'}
                        ></TextInput>
                    </KeyboardAwareScrollView>
                </View>
                <View style={styles.div1}>
                    <Text style={styles.div1Txt}>We are available in</Text>
                    <View style={styles.div2}>
                        {
                            this.props.cities.map((city, idx) => {
                                return (
                                    <TouchableOpacity onPress={() => {
                                        this.selectedCity(city)
                                    }} key={idx}>
                                        <Text style={styles.div2Txt}>{city.city_name}</Text>
                                    </TouchableOpacity>
                                );
                            })
                        }
                    </View>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        flex: .1,
        width: SCREEN_WIDTH,
        height: ((SCREEN_HEIGHT * 10) / 100),
        flexDirection: 'row',
        borderColor: '#aaa',
        borderWidth: 2,
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    div1: {
        flex: 0.9,
        backgroundColor: 'white'
    },
    div1Txt: {
        fontSize: 22,
        fontWeight: '500',
        color: 'black',
        marginLeft: '4%',
        marginTop: '2%'
    },
    div2: {
        marginTop: '6%'
    },
    div2Txt: {
        fontSize: 20,
        marginLeft: '4%'
    },
    headerContainer: {
        flex: 0.1,
        borderColor: '#aaa',
        borderWidth: 2,
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    headerText: {
        //   fontSize: 20,

        marginTop: '4%',
        color: 'black',
        fontWeight: '700'
    },
})