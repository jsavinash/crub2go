import { FaqCollapse } from './faq-collapse';
import { connect } from 'react-redux';
import { faqAction } from '@state_action';
import { RootState } from '@root_state';
const mapDispatchToProps = {
    listFaqAction: faqAction['listFaq']
}
const mapStateToProps = (state: RootState) => ({
    faq: state['faq']['faq']
})

export default connect(mapStateToProps, mapDispatchToProps)(FaqCollapse)


