import * as React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from './account-bottom-style';
import { addNavigationHelpers, NavigationState } from 'react-navigation';
import { Dispatch } from 'redux'
import { createReduxBoundAddListener } from 'react-navigation-redux-helpers';
import { settings, supports } from '../account-constant';
import { removeAsync } from '@common_service';
import Dialog from "react-native-dialog";

export interface AccountBottomProps {
    nav: NavigationState
    dispatch: Dispatch
}
export interface State {
    dialogVisible: boolean
}
export class AccountBottom extends React.Component<AccountBottomProps, State> {
    private settingOpt: any[] = [];
    private supportOpt: any[] = [];
    private navigation = addNavigationHelpers({
        dispatch: this.props.dispatch,
        state: this.props.nav,
        addListener: createReduxBoundAddListener('root'),
    });
    constructor(props: AccountBottomProps) {
        super(props);
        this.state = {
            dialogVisible: false
        }
        this.initBlock();
    }
    
    private handleDialog = (option: string) => {
        const _self = this;
        switch (option) {
            case 'Yes':
                this.logout();
                break;
            case 'No':
                _self.setState({ dialogVisible: false });
                break;
            default:
                console.log("No Action Selected");
        }
    }

    showDialog = () => {
        this.setState({ dialogVisible: true });
    };
    
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
    private navigateTo = (path: string): any => {
        const _self = this;
        switch (path) {
            case "aboutus":
                _self.navigation.navigate(`Page`, { type: "aboutus" });
                break;
            case "howitworks":
                _self.navigation.navigate(`Page`, { type: "how_it_works" });
                break;
            case "termsofservices":
                _self.navigation.navigate(`Page`, { type: "termsconditions" });
                break;
            case "privacypolicy":
                _self.navigation.navigate(`Page`, { type: "privacypolicy" });
                break;
            case "contactUs":
                _self.contactUs()
                break;
            case "tellFriends":
                _self.tellFriends()
                break;
            case "logout":
                _self.showDialog()
                break;
            default:
                _self.navigation.navigate(`${path}`);
        }
    }
    private contactUs = () => {
    }
    private tellFriends = () => {


    }
    private logout = () => {
        const _self = this;
        removeAsync('user');
        this.setState({ dialogVisible: false });
        _self.navigation.navigate(`Login`);
    }
    render() {
        return (
            <View style={styles.container} >
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
                                        onPress={() => { this.navigateTo(`${setting.path}`) }}>
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
                                        onPress={() => { this.navigateTo(`${support.path}`) }}>
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
                <Dialog.Container visible={this.state.dialogVisible}>
                    <Dialog.Title>curb2go</Dialog.Title>
                    <Dialog.Description>
                        Are you sure you want to logout ?
               </Dialog.Description>
                    <Dialog.Button label="Yes" onPress={() => { this.handleDialog('Yes') }} />
                    <Dialog.Button label="No" onPress={() => { this.handleDialog('No') }} />
                </Dialog.Container>
            </View >
        )

    }
}
