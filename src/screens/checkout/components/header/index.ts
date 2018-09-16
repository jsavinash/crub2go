import { Header } from './header';
import { connect } from 'react-redux';
import { RootState } from '@root_state';

const mapStateToProps = (state: RootState) => ({
    nav: state['nav']
})
export default connect(mapStateToProps)(Header)


