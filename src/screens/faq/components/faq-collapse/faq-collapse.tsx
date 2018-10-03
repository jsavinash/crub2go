import * as React from "react"
import { Text, View, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Accordion from 'react-native-collapsible/Accordion';
import { styles } from './faq-collapse-style';
import { FAQRestService } from '../../../../services';
import { IFAQResponse } from '@models';
import { showAlert } from '@common_service';
import {
    ErrTitle,
    ErrInternetCon
} from '@constant';
export interface Props {
    listFaqAction: (faq: IFAQResponse) => any,
    faq: any
}
interface State {
    activeSection: boolean,
    collapsed: boolean,
}
export class FaqCollapse extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            activeSection: false,
            collapsed: true
        }
    }
    componentDidMount() {
        this.getFAQ();
    }
    getFAQ = () => {
        const { listFaqAction } = this.props;
        let modifiedData: any = [];
        FAQRestService.listFAQ().then((success: any) => {
            if (success.problem === "NETWORK_ERROR") {
                showAlert(ErrTitle, ErrInternetCon, 'info');
                return;
            }
            if (success['data']['settings']['success'] == 1) {
                success['data']['data'].forEach((question: any) => {
                    modifiedData.push({
                        title: question['fm_question'],
                        content: question['fm_answer']
                    });
                });
                listFaqAction(modifiedData);
            }
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
        const { faq } = this.props;
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <Accordion
                    activeSection={this.state.activeSection}
                    sections={faq}
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

