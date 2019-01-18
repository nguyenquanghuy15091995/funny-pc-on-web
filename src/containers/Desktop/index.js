import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';

import Desktop from './Desktop';
import {
  makeSelectDesktopVisible,
} from './selectors';

const mapStateTopProps = createStructuredSelector({
  visible: makeSelectDesktopVisible(),
});

export default connect(mapStateTopProps, null)(Desktop);
