import * as React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Dimensions, TextInput } from "react-native";
import { ICities, } from '@models';
import { ListItem } from 'react-native-elements'
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
export interface Props {
    navigation: any,
    cities: ICities[]
}
interface State {

}
export class CityList extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
    }
    componentDidMount() {

    }
    selectedCity = (city: ICities) => {
        this.props.navigation.navigate('Home', { city });
    }
    render() {
        return (
            <View style={styles.container} >
                <View style={{
                    flex: .1,
                    width: SCREEN_WIDTH,
                    height: ((SCREEN_HEIGHT * 10) / 100),
                    flexDirection: 'row',
                    borderColor: '#aaa',
                    borderWidth: 2,
                    alignContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'white',
                }}>
                    <TextInput
                        style={{



                            width: SCREEN_WIDTH
                        }}
                        placeholder={'Serach city name'}


                    ></TextInput>


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