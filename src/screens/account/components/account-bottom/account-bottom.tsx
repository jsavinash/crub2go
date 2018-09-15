import * as React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from './account-bottom-style'
import { settings, supports } from '../account-constant';
import { removeAsync } from '@common_service';
import { NavigationActions } from 'react-navigation';

export const AccountBottom: React.StatelessComponent<{}> = () => {
    let settingOpt: any[] = [];
    let supportOpt: any[] = [];
    const initBlock = () => {
        settings.forEach((setting: any, idx: number) => {
            if (idx == (settings.length - 1)) {
                setting.className = styles.sallowView1;
                settingOpt.push(setting);
            } else {
                setting.border = styles.border;
                setting.className = styles.sallowView;
                settingOpt.push(setting);
            }
        });
        supports.forEach((support: any, idx: number) => {
            if (idx == (supports.length - 1)) {
                support.className = styles.shadow1;
                supportOpt.push(support);
            } else {
                support.className = styles.shadow;
                supportOpt.push(support);
            }
        });
    }
    initBlock();
    const navigateTo = (path: string): any => {
        switch (path) {
            case "aboutus":
                NavigationActions.navigate({ routeName: 'Page', params: { type: "aboutus" } })
                break;
            case "howitworks":
                NavigationActions.navigate({ routeName: 'Page', params: { type: "how_it_works" } })
                break;
            case "termsofservices":
                NavigationActions.navigate({ routeName: 'Page', params: { type: "termsconditions" } })
                break;
            case "privacypolicy":
                NavigationActions.navigate({ routeName: 'Page', params: { type: "privacypolicy" } })
                break;
            case "contactUs":
                contactUs()
                break;
            case "tellFriends":
                tellFriends()
                break;
            case "logout":
                logout()
                break;
            default:
                NavigationActions.navigate({ routeName: `${path}` })
        }
    }
    const contactUs = () => {
    }
    const tellFriends = () => {


    }
    const logout = () => {
        removeAsync('user_access_token');
        removeAsync('user_stripe_id');
        NavigationActions.navigate({ routeName: `Login` })
    }

    return (
        <View style={styles.container}>
            <View style={styles.sallow}>
                <Text style={styles.sallowTxt}>Account Settings</Text>
            </View>
            {
                settingOpt.map((setting: any, idx: number) => {
                    return (
                        <View style={setting.className} key={idx}>
                            <View style={styles.sallowFlex}>
                                <Image
                                    source={setting.image}
                                    style={styles.image}
                                ></Image>
                                <TouchableOpacity
                                    style={styles.touchTxt}
                                    onPress={() => { navigateTo(`${setting.path}`) }}>
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
                supportOpt.map((support: any, idx: number) => {
                    return (
                        <View style={support.className} key={idx}>
                            <View style={styles.sallowFlex}>
                                <Image
                                    source={support.image}
                                    style={styles.image}
                                ></Image>

                                <TouchableOpacity style={styles.touchTxt}
                                    onPress={() => { navigateTo(`${support.path}`) }}>
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
