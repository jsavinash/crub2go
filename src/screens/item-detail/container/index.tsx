import * as React from "react";
import { View, StyleSheet } from "react-native";
import SplashScreen from 'react-native-splash-screen';
import { MainContainer } from '../components';
import { RestaurantRestService } from '../../../services'
import { IItem, ICustomer, IItemVariationParams } from '@models';
import { transformToFromData } from '@common_service';
export interface PlaceDetailProps {
    customer: ICustomer,
    selectedItem: IItem,
    selectedItemDetailAction: (payload: any) => any,
    selectedItemDetail: any
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
                    selectedItem={this.props.selectedItem}
                    isItemPresent={this.state.isItemPresent}
                    selectedItemDetail={this.props.selectedItemDetail}
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