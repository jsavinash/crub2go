import * as React from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";
import { DealScroll } from '../components/deals';
import { IDeals } from '@models';
import { dealAction } from '@state_action';
import Spinner from 'react-native-loading-spinner-overlay';
import { DealsRestService } from '../../../services/';
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
export interface Props {
    deals: IDeals[],
    listDeals: (data: IDeals[]) => any
}
interface State {
    loader: boolean
}
export class Orders extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            loader: false
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <Spinner visible={this.state.loader} textStyle={{ color: '#FFF' }} />
                <View style={styles.headerContainer}>
                    <Text style={styles.headerText}>My Orders</Text>
                </View>

                <Text
                    style={{
                        alignSelf: 'center',
                        fontSize: 25,
                        marginTop: "35%"
                    }}
                >No any Order yet</Text>
                {/* <DealScroll
                    deals={this.props.deals}
                /> */}
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