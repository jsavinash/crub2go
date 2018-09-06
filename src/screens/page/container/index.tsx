import * as React from "react"
import { WebView, View, StyleSheet, Text } from 'react-native';
import { IPage } from "@models";
import { PageRestService } from "../../../services";
import { transformToFromData } from '@common_service';
export interface PageProps {
    navigation: any,
    aboutUs: (content: IPage) => any,
    howItWorks: (content: IPage) => any,
    privacyPolicy: (content: IPage) => any,
    termOfService: (content: IPage) => any,
    aboutUsContent: IPage,
    howItWorksContent: IPage,
    privacyPolicyContent: IPage,
    termOfServiceContent: IPage
}
interface PageState {
    currentPage: string
}
export class Page extends React.Component<PageProps, PageState> {

    constructor(props: PageProps) {
        super(props);
        this.state = {
            currentPage: ''
        }
    }
    componentDidMount() {
        this.getRouteParams()
    }

    getRouteParams = () => {
        const { navigation } = this.props;
        const type = navigation.getParam('type', '');
        console.log("type", type);
        this.setState({ currentPage: type });
        if (this.props.aboutUsContent.content != "" && type == "aboutus")
            return;
        if (this.props.privacyPolicyContent.content != "" && type == "privacypolicy")
            return;
        if (this.props.termOfServiceContent.content != "" && type == "termsconditions")
            return;
        if (this.props.howItWorksContent.content != "" && type == "how_it_works")
            return;
        PageRestService.page(transformToFromData({ page_code: type })).then((pageData: any) => {
            console.log(pageData['data']['data'][0]);
            let contentTitle: string = pageData['data']['data'][0].page_title;
            let content: string = pageData['data']['data'][0].page_content;
            if (contentTitle == "About us")
                this.props.aboutUs({ content, title: "About us" });
            if (contentTitle == "Privacy policy")
                this.props.privacyPolicy({ content, title: "Privacy policy" });
            if (contentTitle == "Terms & Conditions")
                this.props.termOfService({ content, title: "Terms & Conditions" });
            if (contentTitle == "How it works")
                this.props.howItWorks({ content, title: "How it works" });
        }).catch((error) => {
            console.log("error", error);
        })
    }
    render() {
        const aboutus =
            <View style={{ flex: 1 }}>
                <View style={styles.headerContainer}><Text style={styles.headerText}>{this.props.aboutUsContent.title}</Text></View>
                <WebView html={this.props.aboutUsContent.content} />
            </View>;
        const termOfService = <View style={{ flex: 1 }}>
            <View style={styles.headerContainer}><Text style={styles.headerText}>{this.props.termOfServiceContent.title}</Text></View>
            <WebView html={this.props.termOfServiceContent.content} />
        </View>;
        const privacyPolicy = <View style={{ flex: 1 }}>
            <View style={styles.headerContainer}><Text style={styles.headerText}>{this.props.privacyPolicyContent.title}</Text></View>
            <WebView html={this.props.privacyPolicyContent.content} />
        </View>;
        const howItWorks = <View style={{ flex: 1 }}>
            <View style={styles.headerContainer}><Text style={styles.headerText}>{this.props.howItWorksContent.title}</Text></View>
            <WebView html={this.props.howItWorksContent.content} />
        </View>;
        let showElement;
        if (this.state.currentPage == "aboutus") {
            showElement = aboutus;
        } else if (this.state.currentPage == "termsconditions") {
            showElement = termOfService;
        } else if (this.state.currentPage == "privacypolicy") {
            showElement = privacyPolicy;
        }

        else if (this.state.currentPage == "how_it_works") {
            showElement = howItWorks;
        }
        return (<View style={{ flex: 1 }}>{showElement}</View>);
    }
}
var styles = StyleSheet.create({
    headerContainer: {
        flex: 0.1,
        borderColor: '#aaa',
        borderWidth: 2,
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    headerText: {
        fontSize: 20,
        marginTop: '4%',
        color: 'black',
        fontWeight: '700'
    },
});
