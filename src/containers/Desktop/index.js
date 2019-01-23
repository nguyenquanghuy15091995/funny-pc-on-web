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

import {
  openSoftware,
} from 'containers/Software/actions';

import {
  makeSelectSoftwareVisible,
} from 'containers/Software/selectors';

const mapStateTopProps = createStructuredSelector({
  visible: makeSelectDesktopVisible(),
  currentMenuItemId: makeSelectMenuItemId(),
  softwareVisible: makeSelectSoftwareVisible(),
});

function mapDispatchTopProps(dispatch) {
  return {
    selectMenuItemId: bindActionCreators(selectMenuItem, dispatch),
    openNewSoftware: bindActionCreators(openSoftware, dispatch),
  };
}

export default connect(mapStateTopProps, mapDispatchTopProps)(Desktop);
