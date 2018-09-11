import * as React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import MapView, { Marker } from 'react-native-maps';
import SplashScreen from 'react-native-splash-screen';

export interface LocationProps {

}

interface LocationState {
}

export class Location extends React.Component<LocationProps, LocationState> {
    constructor(props: LocationProps) {
        super(props)
    }
    componentDidMount() {
        SplashScreen.hide();
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.mapView}>
                    <MapView
                        style={styles.map}
                        initialRegion={{
                            latitude: 37.78825,
                            longitude: -122.4324,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}
                    />
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
                                <Text style={styles.txt}>Prahlad Nagar, Ahmedabad, Gujarat, India</Text>
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
                                <Text style={styles.txt}>(999) 8075168</Text>
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
    }
});