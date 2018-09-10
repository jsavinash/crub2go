import * as React from "react"
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import * as Animatable from 'react-native-animatable';
import Accordion from 'react-native-collapsible/Accordion';

import { FAQRestService } from '../../../services';
export interface Props {
    customerCreate: (payload: any) => any,
    navigation: any,
    customer: any,
    connection: boolean
}
interface State {
    activeSection: boolean,
    collapsed: boolean,
    content?: any
}
export class FAQ extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            activeSection: false,
            collapsed: true,
            content: []
        }
    }
    componentDidMount() {
        SplashScreen.hide();
        this.getFAQ();
    }
    getFAQ = () => {
        let modifiedData: any = [];
        FAQRestService.listFAQ().then((success: any) => {
            console.log("FAQRestService", success);
            if (success['data']['settings']['success'] == 1) {
                console.log("success['data']['data']", success['data']['data']);
                success['data']['data'].forEach((question: any) => {
                    console.log("question", question);
                    modifiedData.push({
                        title: question['fm_question'],
                        content: question['fm_answer']
                    });
                });

                this.setState({ content: modifiedData });
            } else if (success['data']['settings'] == 0) {

            }
        }).catch((error) => {
            console.log("FAQRestService error", error);

        })
    }

    toggleExpanded = () => {
        this.setState({ collapsed: !this.state.collapsed });
    };

    setSection = (section: any) => {
        this.setState({ activeSection: section });
    };

    renderHeader = (section: any, isActive: any) => {
        return (
            <Animatable.View
                duration={400}
                style={[styles.header, isActive ? styles.active : styles.inactive]}
                transition="backgroundColor"
            >
                <Text style={styles.headerText}>{section.title}</Text>
            </Animatable.View>
        );
    };


    renderContent(section: any, _: any, isActive: any) {
        return (
            <Animatable.View
                duration={400}
                style={[styles.content, isActive ? styles.active : styles.inactive]}
                transition="backgroundColor"
            >
                <Animatable.Text animation={isActive ? 'bounceIn' : undefined}>
                    {section.content}
                </Animatable.Text>
            </Animatable.View>
        );
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <View style={styles.headerContainer}>
                    <Text style={styles.headerText1}>FAQ's</Text>
                </View>
                <Accordion
                    activeSection={this.state.activeSection}
                    sections={this.state.content}
                    touchableComponent={TouchableOpacity}
                    renderHeader={this.renderHeader}
                    renderContent={this.renderContent}
                    duration={400}
                    onChange={this.setSection}
                />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#F5FCFF',
    },
    title: {
        textAlign: 'center',
        fontSize: 22,
        fontWeight: '300',
        marginBottom: 20,
    },
    header: {
        marginTop: 1,
        backgroundColor: '#F5FCFF',
        padding: 10,
        borderWidth: 1,

    },
    headerText: {
        textAlign: 'left',
        fontSize: 16,
        fontWeight: '500',
    },
    content: {
        padding: 20,
        backgroundColor: '#fff',
    },
    active: {
        backgroundColor: 'rgba(255,255,255,1)',
    },
    inactive: {
        backgroundColor: 'rgba(245,252,255,1)',
    },
    selectors: {
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    selector: {
        backgroundColor: '#F5FCFF',
        padding: 10,
    },
    activeSelector: {
        fontWeight: 'bold',
    },
    selectTitle: {
        fontSize: 14,
        fontWeight: '500',
        padding: 10,
    },
    headerContainer: {
        flex: 0.1,
        borderColor: '#aaa',
        borderWidth: 2,
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    headerText1: {
        fontSize: 20,
        marginTop: '4%',
        color: 'black',
        fontWeight: '700'
    },
});