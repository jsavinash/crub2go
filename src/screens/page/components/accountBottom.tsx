import * as React from "react";
import { View, StyleSheet, Text, Image, Dimensions, TouchableOpacity } from "react-native";
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
import { settings, supports } from './account';
export interface AccountBottomProps {
    navigation?: any
}
interface AccountBottomState {

}
export class AccountBottom extends React.Component<AccountBottomProps, AccountBottomState> {
    private settingOpt: any[] = [];
    private supportOpt: any[] = [];
    constructor(props: AccountBottomProps) {
        super(props);
        this.initBlock();
    }

    private navigateTo = (path: string): any => {
        this.props.navigation.navigate(`${path}`);
    }

    private initBlock = () => {
        settings.forEach((setting: any, idx: number) => {
            if (idx == (settings.length - 1)) {
                setting.className = styles.sallowView1;
                this.settingOpt.push(setting);
            } else {
                setting.border = styles.border;
                setting.className = styles.sallowView;
                this.settingOpt.push(setting);
            }
        });
        supports.forEach((support: any, idx: number) => {
            if (idx == (supports.length - 1)) {
                support.className = styles.shadow1;
                this.supportOpt.push(support);
            } else {
                support.className = styles.shadow;
                this.supportOpt.push(support);
            }
        });
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.sallow}>
                    <Text style={styles.sallowTxt}>Account Settings</Text>
                </View>
                {
                    this.settingOpt.map((setting: any, idx: number) => {
                        return (
                            <View style={setting.className} key={idx}>
                                <View style={styles.sallowFlex}>
                                    <Image
                                        source={setting.image}
                                        style={styles.image}
                                    ></Image>
                                    <TouchableOpacity
                                        style={styles.touchTxt}
                                        onPress={this.navigateTo(`${setting.path}`)}>
                                        <Text style={styles.txt}>{setting.title}</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={setting.border}></View>
                            </View>
                        )
                    })
                }
                <View style={styles.sallow1}>
                    <Text style={styles.sallowTxt}>Support</Text>
                </View>
                {
                    this.supportOpt.map((support: any, idx: number) => {
                        return (
                            <View style={support.className} key={idx}>
                                <View style={styles.sallowFlex}>
                                    <Image
                                        source={support.image}
                                        style={styles.image}
                                    ></Image>
                                    <TouchableOpacity style={styles.touchTxt}
                                        onPress={this.navigateTo(`${support.path}`)}>
                                        <Text
                                            style={styles.txt}
                                        >{support.title}</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )
                    })
                }
                <View style={styles.txtView}>
                    <Text style={styles.txtView1}> Version 1.0</Text>
                    <Text style={styles.txtView2}>Designed & Developed by Hidden Brains</Text>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        width: ((SCREEN_WIDTH * 90) / 100),
        alignSelf: 'center',
        borderColor: '#f3f3f3',
    },
    sallow: {
        height: ((SCREEN_HEIGHT * 9) / 100),
        backgroundColor: '#f3f3f3',
        borderTopRightRadius: 22,
        borderTopLeftRadius: 22
    },
    sallowTxt: {
        marginLeft: '10%',
        alignContent: 'flex-start',
        marginTop: '4%',
        fontSize: 17,
        color: '#9b9b9b'
    },
    sallowView: {
        height: ((SCREEN_HEIGHT * 9) / 100),
        backgroundColor: 'white',
        paddingLeft: '3%',
        paddingRight: '3%'
    },
    sallowFlex: {
        flexDirection: 'row',
    },
    image: {
        marginLeft: '5%',
        marginTop: '2%',
        height: 40,
        width: 40,
        left: 0
    },
    touchTxt: {
        marginTop: '2%',
        marginLeft: '2%'
    },
    txt: {
        marginLeft: '5%',
        marginTop: '5%',
    },
    border: {
        borderBottomWidth: 1,
        borderBottomColor: '#aaa',
    },
    sallowView1: {
        height: ((SCREEN_HEIGHT * 9) / 100),
        backgroundColor: 'white',
        paddingLeft: '3%',
        paddingRight: '3%'
    },
    sallow1: {
        height: ((SCREEN_HEIGHT * 9) / 100),
        backgroundColor: '#f3f3f3'
    },
    shadow: {
        height: ((SCREEN_HEIGHT * 9) / 100),
        backgroundColor: 'white',
        borderBottomWidth: 2,
        borderBottomColor: '#aaa',
    },
    shadow1: {
        height: ((SCREEN_HEIGHT * 9) / 100),
        backgroundColor: 'white',
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
    },
    txtView: {
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '10%',
        marginBottom: '10%'
    },
    txtView1: {
        color: 'black',
        fontSize: 16
    },
    txtView2: {
        color: '#aaa',
        fontSize: 12
    }

});