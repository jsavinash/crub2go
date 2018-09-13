import * as React from "react";
import { StyleSheet, View, Image, Text } from 'react-native';
import { Icon, CheckBox, } from 'react-native-elements';
import { ITotalPrice } from '@models';

export interface SelectionProps {
    // instructions: string
    selectedItemDetail: any,
    totalPriceAction: (payload: any) => any,
    totalPrice: any
}
export interface SelectionState {
    selection: any,
    category: any
}
export class Selection extends React.Component<SelectionProps, SelectionState> {
    constructor(props: SelectionProps) {
        super(props);
        this.state = {
            selection: {},
            category: {}
        }
    }
    componentDidMount() {
        this.renderData();
    }
    renderData = () => {
        this.props.selectedItemDetail.map((item: any, index: number) => {
            let { category } = this.state;
            let modifiedcategory = category;
            let categ: any[] = [];
            item.attribute.map((cs: any) => {
                let key = `${cs.attribute_variation_id}${cs.attribute_id}`;
                let { selection } = this.state;
                let modifiedSelection = selection;
                modifiedSelection[`${key}`] = false;
                categ.push(key);
                this.setState({ selection: modifiedSelection });
            });
            modifiedcategory[`category_${index}`] = categ;
            this.setState({ category: modifiedcategory });
        });
    }

    renderTitle = (item: any): any => {
        if (item.attribute.length > 1 && (item.variation_max_selection == '1'))
            return <Text style={styles.headerTxt2}>
                (Choose Up to 1)
       </Text>
    }
    checkClick = (item: any) => {
        let { quantity, totalPrice, realPrice, extraAmount } = this.props.totalPrice;
        let extraPrice = extraAmount;
        let totalBaseAmount = realPrice;

        let keyss = `${item.attribute_variation_id}${item.attribute_id}`;
        let { selection } = this.state;
        let updateState = true;
        let modifiedSelection = selection;
        let currentCategory: any = [];
        for (let key in this.state.category) {
            if (this.state.category[key].includes(keyss)) {
                currentCategory = this.state.category[key];
            }
        }
        if (!modifiedSelection[`${keyss}`]) {
            currentCategory.map((x: any) => {
                if (modifiedSelection[`${x}`]) {
                    updateState = false
                    return;
                }
            })
        }


        if (updateState) {
            let total: any;
            if (modifiedSelection[`${keyss}`]) {
                modifiedSelection[`${keyss}`] = false;
                delete extraPrice[`${item.attribute_name}`];
                    for (let key in extraPrice) {
                        totalBaseAmount = totalBaseAmount + extraPrice[key];
                    }
                total = (quantity * totalBaseAmount);
                let price: ITotalPrice = {
                    realPrice,
                    quantity,
                    totalPrice: total,
                    extraAmount: extraPrice
                }
                console.log("price..........................1", price);
                this.props.totalPriceAction(price);
            }
            else {
                modifiedSelection[`${keyss}`] = true;
                extraPrice[`${item.attribute_name}`] = parseFloat(item.attribute_price);
              console.log('extraPrice................', extraPrice);
              console.log('totalBaseAmount................', totalBaseAmount);
                    for (let key in extraPrice) {
                        console.log('ghggddf', extraPrice[key]);
                        totalBaseAmount = totalBaseAmount + extraPrice[key];
                    }
                total = (quantity * totalBaseAmount);
                console.log('total................', total);

                let price: ITotalPrice = {
                    realPrice,
                    quantity,
                    totalPrice: total,
                    extraAmount: extraPrice
                }
                console.log("price..........................2", price);

                this.props.totalPriceAction(price);
            }
            this.setState({ selection: modifiedSelection });
        }
    };
    render() {
        return (
            <View style={styles.container}>
                {this.props.selectedItemDetail.map((item: any, idx: number) => {
                    return (
                        <View key={idx}>
                            <View style={styles.headerContent}>
                                <Text style={styles.headerTxt1}>
                                    {item.variation_name}
                                </Text>
                                {this.renderTitle(item)}
                            </View>
                            {item.attribute.map((attr: any, idc: number) => {
                                return (
                                    <View style={styles.box} key={idc}>
                                        <View style={styles.content}>
                                            <CheckBox
                                                title={attr.attribute_name}
                                                containerStyle={styles.checkBx}
                                                checked={this.state.selection[`${attr.attribute_variation_id}${attr.attribute_id}`]}
                                                textStyle={styles.checktxt}
                                                onPress={() => { this.checkClick(attr) }}

                                            />
                                        </View>
                                        <View style={styles.priceCnt}>
                                            <Text style={styles.priceTxt}>+ {attr.attribute_price}</Text>
                                        </View>
                                        {/* <View> */}
                                    </View>
                                )
                            })}

                        </View>
                    )

                })
                }

                <View style={styles.border}></View>
            </View>
        )
    }
}

var styles = StyleSheet.create({
    container: {
        height: '60%',
        width: '100%',
    },
    headerContent: {
        width: '100%',
        height: '25%',
        backgroundColor: '#f3f3f3',
        flexDirection: 'column'
    },
    headerTxt1: {
        marginTop: '1%',
        fontSize: 15,
        color: 'black',
        marginLeft: '2%',
    },
    headerTxt2: {
        fontSize: 12,
        color: 'black',
        marginLeft: '2%',
    },
    box: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        backgroundColor: 'white',
        borderColor: '#aaa'
    },
    checkBx: {
        backgroundColor: 'white',
        borderWidth: 0
    },
    checktxt: {
        fontSize: 16,
        fontWeight: '200'
    },
    content: {
        marginLeft: '1%'
    },
    contentTxt: {
        color: 'black',
        fontSize: 14
    },
    priceCnt: {
        marginTop: '5%',
        marginRight: '2%',

    },
    priceTxt: {
        color: 'black',
        fontSize: 16
    },
    image: {
        height: 35,
        width: 35,
        left: 0
    },
    border: {
        borderBottomWidth: 1,
        borderBottomColor: '#aaa'
    },
    container1: {
        width: '100%',
        height: '11%',
        backgroundColor: '#f3f3f3'
    },
    txt: {
        marginTop: '3%',
        left: '2%',
        fontSize: 16,
        color: 'black'
    }
});


{/* <View style={styles.container} >
<CheckBox
    title="1 cup"
    containerStyle={styles.checkBx}
    checked={this.state.selection}
/>
</View> */}