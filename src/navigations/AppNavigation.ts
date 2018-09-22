import { StackNavigator } from 'react-navigation';
import {
  LoginScreen,
  ForgotPasswordScreen,
  VerificationScreen,
  ResetPasswordScreen,
  ChangePasswordScreen,
  RegisterScreen,
  PlaceListScreen,
  LocationScreen,
  PlaceDetailScreen,
  ItemDetailScreen,
  AccountScreen,
  ProfileScreen,
  DealsScreen,
  RateReviewScreen,
  AddCardScreen,
  CheckoutScreen,
  FavouriteScreen,
  OrdersScreen,
  OrderSummaryScreen,
  PaymentScreen,
  PaymentSuccessScreen,
  TabNavigatorScreen,
  CityScreen,
  PageScreen,
  AppEntryScreen,
  EditProfile,
  FAQScreen
} from '../screens';
import {
  Home,
  Login,
  ForgotPassword,
  Verification,
  ResetPassword,
  ChangePassword,
  Register,
  RateReview,
  Account,
  PlaceList,
  Locations,
  PlaceDetail,
  ItemDetail,
  Profile,
  Deals,
  AddCard,
  Checkout,
  Favourite,
  Orders,
  OrderSummary,
  Payment,
  PaymentSuccess,
  City,
  Policy,
  FAQ
} from '../components/nav-config';

import styles from './styles/NavigationStyles'



const initialRoute = (): string => {
  return 'ForgotPassword';
}

const stackRouterConfig: any = {
  headerMode: 'float',
  initialRouteName: initialRoute(),
  navigationOptions: {
    headerStyle: styles.header,
  },
};

// Manifest of possible screens
const PrimaryNavigation = StackNavigator(
  {
    FAQ: {
      screen: FAQScreen,
      path: 'faq',
      navigationOptions: () => (FAQ),
    },
    EditProfile: {
      screen: EditProfile,
      path: 'edit-profile',
      navigationOptions: () => (Home),
    },
    AppEntry: {
      screen: AppEntryScreen,
      path: 'app',
      navigationOptions: () => (Home),
    },
    Home: {
      screen: TabNavigatorScreen,
      path: 'home',
      navigationOptions: () => (Home),
    },
    Login: {
      screen: LoginScreen,
      path: 'login',
      navigationOptions: () => (Login),
    },
    ChangeMobileNumber: {
      screen: ForgotPasswordScreen,
      path: 'change-number',
      navigationOptions: () => (ForgotPassword),
    },
    ForgotPassword: {
      screen: ForgotPasswordScreen,
      path: 'forgot',
      navigationOptions: () => (ForgotPassword),
    },
    Verification: {
      screen: VerificationScreen,
      path: 'verification',
      navigationOptions: () => (Verification),

    },
    ResetPassword: {
      screen: ResetPasswordScreen,
      path: 'reset',
      navigationOptions: () => (ResetPassword)
    },
    ChangePassword: {
      screen: ChangePasswordScreen,
      path: 'change',
      navigationOptions: () => (ChangePassword)
    },
    Register: {
      screen: RegisterScreen,
      path: 'register',
      navigationOptions: () => (Register)
    },
    PlaceList: {
      screen: PlaceListScreen,
      path: 'places',
      navigationOptions: () => (PlaceList)
    },
    Location: {
      screen: LocationScreen,
      path: 'location',
      navigationOptions: () => (Locations)
    },
    PlaceDetail: {
      screen: PlaceDetailScreen,
      path: 'place-detail',
      navigationOptions: () => (PlaceDetail)

    },
    ItemDetail: {
      screen: ItemDetailScreen,
      path: 'item-detail',
      navigationOptions: () => (ItemDetail)
    },
    Account: {
      screen: AccountScreen,
      path: 'account',
      navigationOptions: () => (Account)
    },
    Profile: {
      screen: ProfileScreen,
      path: 'profile',
      navigationOptions: () => (Profile)
    },
    Deals: {
      screen: DealsScreen,
      path: 'deals',
      navigationOptions: () => (Deals)
    },
    RateReview: {
      screen: RateReviewScreen,
      path: 'review',
      navigationOptions: () => (RateReview)
    },
    AddCard: {
      screen: AddCardScreen,
      path: 'card',
      navigationOptions: () => (AddCard)
    },
    Checkout: {
      screen: CheckoutScreen,
      path: 'checkout',
      navigationOptions: () => (Checkout)
    },
    Favourite: {
      screen: FavouriteScreen,
      path: 'favourite',
      navigationOptions: () => (Favourite)
    },
    Orders: {
      screen: OrdersScreen,
      path: 'orders',
      navigationOptions: () => (Orders)
    },
    OrderSummary: {
      screen: OrderSummaryScreen,
      path: 'order-summary',
      navigationOptions: () => (OrderSummary)
    },
    Payment: {
      screen: PaymentScreen,
      path: 'payment',
      navigationOptions: () => (Payment)
    },
    City: {
      screen: CityScreen,
      path: 'city',
      navigationOptions: () => (City)
    },
    PaymentSuccess: {
      screen: PaymentSuccessScreen,
      path: 'payment-success',
      navigationOptions: () => (PaymentSuccess)
    },
    Page: {
      screen: PageScreen,
      path: 'policy',
      navigationOptions: () => (Policy)
    }
  },
  stackRouterConfig
)
//e0a65b6f625a2ad0db051c49f54d6d64



export default PrimaryNavigation
