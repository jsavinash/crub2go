import * as React from "react";
import { View, StyleSheet } from "react-native";
import SplashScreen from 'react-native-splash-screen';
import { MainContainer } from '../components';
import { RestaurantRestService } from '../../../services'
import { IItem, ICustomer, IItemVariationParams, ITotalPrice } from '@models';
import { transformToFromData } from '@common_service';
export interface PlaceDetailProps {
    customer: ICustomer,
    selectedItem: IItem,
    selectedItemDetailAction: (payload: any) => any,
    selectedItemDetail: any,
    totalPriceAction: (payload: any) => any,
    totalPrice: any,
}
interface PlaceDetailPropsState {
    isItemPresent: boolean;
}
export class ItemDetail extends React.Component<PlaceDetailProps, PlaceDetailPropsState> {
    constructor(props: PlaceDetailProps) {
        super(props)
        this.state = {
            isItemPresent: false
        }
    }
    componentDidMount() {
        SplashScreen.hide();
        this.itemDetails();
        this.initPrice();
    }

    initPrice = () => {
        const { item_original_price } = this.props.selectedItem;
        let data: ITotalPrice = {
            totalPrice: parseFloat(item_original_price),
            quantity: 1,
            realPrice: parseFloat(item_original_price),
            extraAmount: {}
        }
        this.props.totalPriceAction(data);
    }
    itemDetails = () => {
        const _self = this;
        const { item_id } = _self.props.selectedItem;
        let params: IItemVariationParams =
        {
            item_id: item_id
        };
        let itemData: any[] = [];
        RestaurantRestService.listItemDetail(transformToFromData(params)).then((itemDetails: any) => {
            console.log('itemDetails', itemDetails);
            if (itemDetails['data']['settings']['success'] == 1) {
                itemData = itemDetails['data']['data'];
                _self.props.selectedItemDetailAction(itemData);
                _self.setState({ isItemPresent: true })
            } else if (itemDetails['data']['settings']['success'] == 0) {
                _self.setState({ isItemPresent: false })
            }
        }).catch((error) => {
            console.log("itemDetails error", error);
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <MainContainer
                    totalPriceAction={this.props.totalPriceAction}
                    selectedItem={this.props.selectedItem}
                    isItemPresent={this.state.isItemPresent}
                    selectedItemDetail={this.props.selectedItemDetail}
                    totalPrice={this.props.totalPrice}
                />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})