import * as React from "react";
import { View, StyleSheet } from "react-native";
import SplashScreen from 'react-native-splash-screen';
import { MainContainer } from '../components';
import { RestaurantRestService, CartRestService } from '../../../services'
import { IItem, ICustomer, IItemVariationParams, ITotalPrice, IRestaurants } from '@models';
import { transformToFromData } from '@common_service';
export interface PlaceDetailProps {
    //Action
    selectedItemDetailAction: (payload: any) => any,
    totalPriceAction: (payload: any) => any,
    seletedAttributeAction: (payload: any) => any,
    cartAction: (cart: any) => any,
    cartTotalAction: (cartTotal: any) => any,
    navigation: any,
    //Store Variable
    customer: ICustomer,
    selectedItem: IItem,
    selectedRestaurant: IRestaurants,
    selectedItemDetail: any,
    selectedCategory: any,
    totalPrice: ITotalPrice,
    selectedMenu: any,
    selectedAttribute: any
}
interface PlaceDetailPropsState {
    //State Variable
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
        const { item_discounted_price } = this.props.selectedItem;
        const originalPrice: string = item_discounted_price.toString();
        let data: ITotalPrice = {
            totalPrice: parseFloat(originalPrice),
            quantity: 1,
            realPrice: parseFloat(originalPrice),
            extraAmount: {}
        }
        this.props.totalPriceAction(data);
    }
    submit = () => {
        const {
            selectedRestaurant,
            selectedCategory,
            selectedItem,
            selectedAttribute,
            totalPrice,
            customer,
            navigation } = this.props;
        let construct: any = [];
        selectedAttribute.forEach((attr: any) => {
            let obj: any = {};
            obj = Object.assign({}, attr.variation);
            delete attr['variation'];
            obj.attribute = [];
            obj.attribute.push(attr);
            construct.push(obj);
        });
        let cartToCartParams: any = {
            restaurant_id: selectedRestaurant['restaurant_id'],
            menu_id: selectedCategory['cat_menu_id'],
            cat_id: selectedCategory['cat_id'],
            item_id: selectedItem['item_id'],
            item_quantity: totalPrice['quantity'].toString(),
            item_price: totalPrice['realPrice'].toString(),
            item_total_price: totalPrice['totalPrice'].toString(),
            item_special_instruction: "No Instrucation",
            item_variation: JSON.stringify(construct)
        }
        let formData = transformToFromData(cartToCartParams);
        if (customer && customer['user_access_token']) {
            CartRestService.addToCart(formData, customer['user_access_token']).then((success: any) => {
             console.log("success['data'] 12345", success['data']);
                if (success['data']['settings']['success'] == 1) {
                        this.getCartDetails();

                } else if (success['data']['settings']['success'] == 0) {

                }
            }).catch((error) => {
                console.log("error......................", error);
            })
        } else {
            navigation.navigate('Login', { screen: 'checkout' });
        }
    }
    getCartDetails = () => {
        const _self = this;
        const { customer } = this.props;
        CartRestService.viewCart(customer['user_access_token']).then((cart: any) => {
            console.log("cart update.........................", cart);
            if (cart['data']['settings']['success'] == 1) {
                setTimeout(() => {
                _self.props.cartAction(cart['data']['data']['cart_item']);
                _self.props.cartTotalAction(cart['data']['data']['cart_final_total']);
                }, 400);
                this.props.navigation.goBack();
            }
        }).catch((error) => {

        })
    }
    componentWillUnmount() {
        this.props.seletedAttributeAction([]);
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

    triggerAddToCard = () => {
        this.submit();
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
                    triggerAddToCard={this.triggerAddToCard}
                    seletedAttributeAction={this.props.seletedAttributeAction}
                    selectedAttribute={this.props.selectedAttribute}
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