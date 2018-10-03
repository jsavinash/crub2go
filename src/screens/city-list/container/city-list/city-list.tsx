import * as React from "react"
import { ScrollView } from "react-native";
import SplashScreen from 'react-native-splash-screen';
import {
    Search,
    Title,
    Cities
} from '../../components';
import { CitiesRestService } from '../../../../services';
import {
    InternalServerError,
    InternalServerErrorTitle
} from '@constant';
import { showAlert, logger } from '@common_service';

export interface CityListProps {
    navigation: any,
    cityAction: (cities: any) => any,
}
export class CityList extends React.Component<CityListProps, {}> {
    constructor(props: CityListProps) {
        super(props);
    }
    componentDidMount() {
        this.getCities();
        SplashScreen.hide();
    }

    getCities = () => {
        let _self = this;
        CitiesRestService.listCities().then((citiesData: any) => {
            if (citiesData['data']['settings']['success'] == 1) {
                _self.props.cityAction(citiesData['data']['data']);
            } else if (citiesData['data']['settings']['success'] == 0) {
                _self.props.cityAction([]);
            }
        }).catch((error) => {
            logger('City', 'ERROR', error);
            showAlert(InternalServerErrorTitle, InternalServerError, 'warning');
        })
    }

    render() {
        const { navigation } = this.props;
        return (
            <ScrollView style={{
                backgroundColor: 'white'
            }}>
                <Search  navigation={navigation}/>
                <Title />
                <Cities navigation={navigation} />
            </ScrollView>
        )
    }
}
