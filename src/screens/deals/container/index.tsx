import * as React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { DealCard } from '../components';
// import { IDeals } from '@models';
// import { dealAction } from '@state_action';
// import Spinner from 'react-native-loading-spinner-overlay';
// import { DealsRestService } from '../../../services/';
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
export interface Props {
    navigation: any,
    deals: any,
}
interface State {
    restaurantName: string
}
export class Deals extends React.Component<Props, State> {
    private restaurantName: string;
    constructor(props: Props) {
        super(props);
        this.state = {
            restaurantName: ''
        }
    }
    componentDidMount() {
        this.getRouteParams()
    }
    getRouteParams = () => {
        const { navigation } = this.props;
        this.setState({ restaurantName: navigation.getParam('restaurant_name', '') })
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <Text style={styles.headerText}>Deals</Text>
                </View>
                <DealCard 
                restaurantName={this.state.restaurantName}
                navigation={this.props.navigation}/>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        top: 0,
        left: 0,
        position: 'absolute',
        backgroundColor: 'white',
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT,
    },
    headerContainer: {
        flex: 0.1,
        borderColor: '#aaa',
        borderWidth: 2,
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    headerText: {
        fontSize: 20,
        marginTop: '4%',
        color: 'black',
        fontWeight: '700'
    }
})