import * as React from "react";
import { Text, StyleSheet, View, Dimensions, TouchableOpacity } from 'react-native';
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
import Icon from 'react-native-vector-icons/FontAwesome';
import ActionSheet from 'react-native-actionsheet';
import { PlaceCard, SearchBar, CountrySelectBar } from '@common_Component';


export interface MainBoxProps {
}

interface MainBoxState {

}

export class MainBox extends React.Component<MainBoxProps, MainBoxState> {
    constructor(props: MainBoxProps) {
        super(props);
    }
    openActionSheet = () => {
        this.ActionSheet.show()
    }
    onAction = (idx: number) => {
        if (idx === 0) {
            console.log("idx", idx, 'Distance');
        } else if (idx === 1) {
            console.log("idx", idx, 'Rating');
        }
    }
    render() {
        return (
            <View style={{
                flex: 1
            }}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: '100%',
                    backgroundColor: 'white',
                    height: '8%',
                    borderBottomColor: '#aaa',
                    borderBottomWidth: 1
                }}>

                    <View style={{
                        marginTop: '2%',
                        marginLeft: '5%'
                    }}>
                        <Icon.Button name="map-pin" color="#ACD472" backgroundColor="white" onPress={this.openActionSheet}>
                        </Icon.Button>
                    </View>
                    <View style={{
                        marginTop: '2%',
                        justifyContent: 'flex-start',
                        flexDirection: 'column',
                        marginLeft: 0
                    }}>
                        <Text style={{
                            fontSize: 14,
                            color: '#ACD472'
                        }}>Your Location</Text>
                        <Text style={{
                            color: 'black',
                            fontSize: 16,
                            fontWeight: '600'
                        }}>Ahmedabad</Text>
                    </View>
                    <View style={{ marginTop: '2%' }}>
                        <Icon.Button name="list" color="#ACD472" backgroundColor="white" onPress={this.openActionSheet}>
                        </Icon.Button>
                    </View>
                </View>
                <SearchBar />
                <PlaceCard />
                <ActionSheet
                    ref={o => this.ActionSheet = o}
                    options={['Distance', 'Rating']}
                    onPress={this.onAction}
                />
            </View>
        )
    }
}
var styles = StyleSheet.create({
    container: {
        flex: 1,
        width: ((SCREEN_WIDTH * 55) / 100)
    },

});