import * as React from "react"
import { Image, StyleSheet } from 'react-native';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import PlaceListScreen from '../../place-list';
import OrderScreen from '../../orders';
import DealsScreen from '../../deals';
import AccountScreen from '../../account';

export default TabNavigator(
    {
        Home: {
            screen: PlaceListScreen
        },
        'My Orders': {
            screen: OrderScreen
        },
        Deals: {
            screen: DealsScreen,
        },
        'My Account': {
            screen: AccountScreen
        },
    },
    {
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused }) => {
                const { routeName } = navigation.state;
                let iconName: any;
                if (routeName === 'Home') {
                    iconName = focused ? require('../../../assets/app-images/card_active.png') : require('../../../assets/app-images/card_deactive.png')
                } else if (routeName === 'My Orders') {
                    iconName = focused ? require('../../../assets/app-images/order_active.png') : require('../../../assets/app-images/order_deactive.png')
                }
                else if (routeName === 'Deals') {
                    iconName = focused ? require('../../../assets/app-images/deals_active.png') : require('../../../assets/app-images/deals_deactive.png')
                }
                else if (routeName === "My Account") {
                    iconName = focused ? require('../../../assets/app-images/user_active.png') : require('../../../assets/app-images/user_deactive.png')
                }
                // You can return any component that you like here! We usually use an
                // icon component from react-native-vector-icons
                return <Image style={styles.imageStyle} source={iconName} />;
            },
        }),
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        tabBarOptions: {
            activeTintColor: '#ACD472',
            inactiveTintColor: 'gray',
        },
        initialRouteName: 'My Account',
        animationEnabled: false,
        swipeEnabled: false,
        
    }
);



const styles = StyleSheet.create({
    imageStyle: {
        marginLeft: 15,
        alignSelf: 'center',
        height: 30,
        width: 30
    },
    titleInfoStyle: {
        fontSize: 16,
        color: '#8e8e93'
    }
});
