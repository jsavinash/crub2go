import * as React from "react";
import { Text, StyleSheet, View, Dimensions, ScrollView, Image } from 'react-native';
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
import { IDeals } from "@model";
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards';
import { dealAction } from "../../../state_action";
export interface Props {
    deals: IDeals[]
}
interface State {
    deals: IDeals[],
    loader?: boolean
}
export class DealScroll extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
        
        }
       
        
    }

    componentWillReceiveProps(nextProps: any) {
        if (nextProps.deals.deals.length > 0) {
            this.setState({ deals: nextProps.deals.deals });
            console.log(this.state.deals);
        }
    }
    render() {
        return (
        <View style={{flex: 1}}>
            <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Deal</Text>
        </View>
            <ScrollView>
                {this.state.deals.map((deal, idx) => {
                    return (
                        <Card key={idx}>
                            <CardImage
                                source={{ uri: deal.restaurant_image }}
                            />
                            <View style={styles.container}>
                                <Text style={styles.content1left}>{deal.restaurant_name}</Text>
                                <Text style={styles.content1right}>Coupon Code</Text>
                            </View>
                            <View style={styles.container}>
                                <Text style={styles.content2left}>{deal.percentage} % Off</Text>
                                <Text style={styles.content2right}>{deal.coupon_code}</Text>
                            </View>
                        </Card>
                    )
                })}
            </ScrollView>
            </View>
        )
    }
}
var styles = StyleSheet.create({
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
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    content1left: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        color: 'black',
        fontSize: 16,
        marginLeft: '2%'
    },
    content1right: {
        marginRight: "2%"
    },
    content2left: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginLeft: '2%'
    },
    content2right: {
        marginRight: "5%"
    }

});