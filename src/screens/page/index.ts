import { Page } from './container';

import { connect } from 'react-redux'
import { pageAction } from '@state_action';
import { RootState } from '../../reducers/RootReducer';

const mapDispatchToProps = {
    aboutUs: pageAction.aboutUs,
    howItWorks: pageAction.howItWorks,
    privacyPolicy: pageAction.privacyPolicy,
    termOfService: pageAction.termOfService
}
const mapStateToProps = (state: RootState) => ({
    aboutUsContent: state['page']['aboutUs'],
    howItWorksContent: state['page']['howItWorks'],
    privacyPolicyContent: state['page']['privacyPolicy'],
    termOfServiceContent: state['page']['termOfService']
})
export default connect(mapStateToProps, mapDispatchToProps)(Page)


