import * as React from "react";
import { StyleSheet, View, Image, Text } from 'react-native';
import { Icon, CheckBox, } from 'react-native-elements';

export interface SelectionProps {
    // instructions: string
    selectedItemDetail: any
}
export interface SelectionState {
    selection: any
}
export class Selection extends React.Component<SelectionProps, SelectionState> {
    constructor(props: SelectionProps) {
        super(props);
        this.state = {
            selection: true
        }
    }
    componentDidMount() {
        this.renderData();
    }
    renderData = () => {
        console.log("data.....................", this.props.selectedItemDetail);
    }
    componentWillReceiveProps(nextProps: any) {
        console.log("nextProps", nextProps);
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.content}>
                    <CheckBox
                        title="1 cup"
                        containerStyle={styles.checkBx}
                        checked={true}
                    />
                </View>
                <View style={styles.imageCtn}>
                  <Text>+ $5.00</Text>
                </View>
            </View>
        )
    }
}

var styles = StyleSheet.create({

    txt: {
        marginTop: '3%',
        left: '2%',
        fontSize: 16,
        color: 'black'
    },
    checkBx: {
        backgroundColor: 'white',
        borderWidth: 0,
        marginLeft: 0,
        height: '40%'
    },

    container: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        height: 'auto',
        width: '100%',
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderColor: '#aaa'
    },
    content: {
        marginTop: '5%',
        marginLeft: '8%'
    },
    contentTxt: {
        color: 'black',
        fontSize: 14
    },
    imageCtn: {
        marginTop: '2%',
    },
    image: {
        height: 35,
        width: 35,
        left: 0
    },

});


{/* <View style={styles.container} >
<CheckBox
    title="1 cup"
    containerStyle={styles.checkBx}
    checked={this.state.selection}
/>
</View> */}