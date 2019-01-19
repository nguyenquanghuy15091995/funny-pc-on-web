import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';

import Desktop from './Desktop';
import {
  makeSelectDesktopVisible,
  makeSelectMenuItemId,
} from './selectors';
import {
  selectMenuItem,
} from './actions';

const mapStateTopProps = createStructuredSelector({
  visible: makeSelectDesktopVisible(),
  currentMenuItemId: makeSelectMenuItemId(),
});

function mapDispatchTopProps(dispatch) {
  return {
    selectMenuItemId: bindActionCreators(selectMenuItem, dispatch),
  };
}

export default connect(mapStateTopProps, mapDispatchTopProps)(Desktop);
