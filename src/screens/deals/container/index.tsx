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
export class Deals extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            loader: true
        }
        this.deals();
    }
    deals = () => {
        DealsRestService.listDeals().then((dealsList: any) => {
            this.props.listDeals(dealsList.data.data);
            this.setState({ loader: false });
        }).catch((error) => {
            this.setState({ loader: false });
            console.log('error', error);
        });
    }
    render() {
        return (
            <View style={styles.container}>
                <Spinner visible={this.state.loader} textStyle={{ color: '#FFF' }} />
                <DealScroll
                    deals={this.props.deals}
                />
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
    }
})