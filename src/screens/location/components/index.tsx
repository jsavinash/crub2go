import * as React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import MapView, { Marker, Circle } from 'react-native-maps';
import SplashScreen from 'react-native-splash-screen';

export interface LocationProps {
    navigation: any
}

interface LocationState {
    markers: [{
        title: string,
        latlng: {
            latitude: number,
            longitude: number
        }
    }],
    resturant: any
}

export class Location extends React.Component<LocationProps, LocationState> {
    constructor(props: LocationProps) {
        super(props)
        const { navigation } = this.props;
        const resturant = navigation.getParam('resturant', '');
        this.state = {
            markers: [{
                title: resturant['restaurant_name'],
                latlng: {
                    latitude: parseFloat(resturant['restaurant_latitude']),
                    longitude: parseFloat(resturant['restaurant_longitude'])
                }
            }],
            resturant: resturant
        }
    }

    componentDidMount() {
        SplashScreen.hide();
        // this.getRouteParams();
    }
    // getRouteParams = () => {
    //     const { navigation } = this.props;
    //     const resturant = navigation.getParam('resturant', '');
    //     if (resturant)
    //         console.log("Location resturant", resturant);
    //     this.state = {
    //         markers: [{
    //             title: resturant['restaurant_name'],
    //             latlng: {
    //                 latitude: resturant['restaurant_latitude'],
    //                 longitude: resturant['restaurant_longitude']
    //             }
    //         }]
    //     }
    // }

    handlePress = () => {

    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.mapView}>
                    <MapView
                        style={styles.map}
                        initialRegion={{
                            latitude: parseFloat(this.state.resturant['restaurant_latitude']),
                            longitude: parseFloat(this.state.resturant['restaurant_longitude']),
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}
                        onPress={this.handlePress}
                    >
                        <Circle
                            key={(parseFloat(this.state.resturant['restaurant_latitude']) + (this.state.resturant['restaurant_latitude'])).toString()}
                            center={{
                                latitude: parseFloat(this.state.resturant['restaurant_latitude']),
                                longitude: parseFloat(this.state.resturant['restaurant_latitude'])
                            }}
                            radius={4000}
                            strokeWidth={1}
                            strokeColor={'#1a66ff'}
                            fillColor={'rgba(230,238,255,0.5)'}
                        >
                        </Circle>
                        {
                            this.state.markers.map((marker: any) => {
                                return (
                                    <Marker
                                        key={marker.title}
                                        coordinate={marker.latlng}
                                        title={marker.title}
                                    />

                                )
                            })
                        }
                    </MapView>
                </View>
                <View style={styles.locationView}>
                    <View style={styles.locationContent}>
                        <View style={styles.div}>
                            <View style={styles.imgContent}>
                                <Image
                                    source={
                                        require('../../../assets/app-images/location_icon_s_3.png')
                                    }
                                    style={styles.img}
                                ></Image>
                            </View>
                            <View style={styles.txtContent}>
                                <Text style={styles.txt1}>{this.state.resturant.restaurant_address}</Text>
                            </View>
                        </View>
                        <View style={styles.div}>
                            <View style={styles.imgContent}>
                                <Image
                                    source={
                                        require('../../../assets/app-images/mobile_deactive.png')
                                    }
                                    style={styles.img}
                                ></Image>
                            </View>
                            <View style={styles.txtContent}>
                                <Text style={styles.txt}>{this.state.resturant.restaurant_mobile_number}    </Text>
                            </View>
                        </View>
                        <View style={styles.div}>
                            <View style={styles.imgContent}>
                                <Image
                                    source={
                                        require('../../../assets/app-images/clock_s_3c.png')
                                    }
                                    style={styles.img}
                                ></Image>
                            </View>
                            <View style={styles.txtContent1}>
                                <Text style={styles.txt}>Every Day -</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View >
        )
    }
}

const styles = StyleSheet.create({
    container:
    {
        flex: 1,
        backgroundColor: 'white'
    },
    map: {
        flex: 1,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    },
    mapView: {
        flex: 0.5
    },
    locationView: {
        flex: 0.5
    },
    locationContent: {
        flex: 1,
        backgroundColor: 'white'
    },
    div: {
        flexDirection: 'row',
        width: '100%',
        height: '30%',
    },
    imgContent: {
        margin: 15
    },
    img: {
        height: 30,
        width: 30
    },
    txtContent: {
        flex: 1,
        margin: 15,
        width: '100%',
        borderBottomColor: "#aaa",
        borderBottomWidth: 1
    },
    txtContent1: {
        margin: 15

    },
    txt: {
        fontSize: 18
    },
    txt1: {
        fontSize: 16
    }
});