import * as React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import StarRating from 'react-native-star-rating';
import { TextField } from 'react-native-material-textfield';
export interface Props {

}
interface State {

}
export class RateReviewCardField extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Text>Tap a star to rate</Text>
                </View>
                <StarRating
                    disabled={false}
                    emptyStar={'ios-star-outline'}
                    fullStar={'ios-star'}
                    halfStar={'ios-star-half'}
                    iconSet={'Ionicons'}
                    maxStars={5}
                    // rating={this.state.starCount}
                    // selectedStar={(rating) => this.onStarRatingPress(rating)}
                    fullStarColor={'red'}
                />

                <View style={styles.txtField}>
                    <View style={styles.txtFieldIn}>
                        <TextField label='Title'
                            baseColor='#aaa'
                            textColor='black'
                            tintColor="#ACD472"
                            lineWidth={2}
                            animationDuration={60}
                        />
                    </View>
                </View>


                <View style={styles.txtField}>
                    <View style={styles.txtFieldIn}>
                        <TextField label='Description'
                            baseColor='#aaa'
                            textColor='black'
                            tintColor="#ACD472"
                            lineWidth={2}
                            animationDuration={60}
                        />
                    </View>
                </View>
            </View>
        )
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 0.7,
        margin: 14,
    },
    image: {
        height: 35,
        width: 40,
        position: 'absolute',
        right: 0,
        marginTop: 25
    },
    txtField: {
        flexDirection: 'row'
    },
    txtFieldIn: {
        width: '100%'
    },
    txtField1: {
        flexDirection: 'row',
        marginLeft: '2%',
        width: '50%'
    },
    txtFieldIn1: {
        width: '100%'
    }

});