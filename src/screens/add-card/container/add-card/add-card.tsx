import * as React from "react"
import { ImageBackground, ScrollView } from "react-native";
import SplashScreen from 'react-native-splash-screen';
import { Images } from '@themes';
import { styles } from './add-card-style';
import {
    CardView,
    Header,
    Logo,
    Button,
    Title,
    CardLoader
} from '../../components';
export interface Props {
    customerCreate: (payload: any) => any,
    navigation: any,
    customer: any,
    connection: boolean
}
export class AddCard extends React.Component<Props, {}> {
    dropdown: any
    constructor(props: Props) {
        super(props);
    }
    componentDidMount() {
        SplashScreen.hide();
    }

    render() {
        const { navigation } = this.props;

        return (
            <ScrollView>
                <CardLoader />
                <ImageBackground
                    source={Images.BG_IMAGE}
                    style={styles.bgImage}>
                    <Header navigation={navigation}/>
                    <Logo />
                    <Title />
                    <CardView />
                    <Button navigation={navigation} />
                </ImageBackground>
            </ScrollView>
        )
    }
}