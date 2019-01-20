import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  loadOS,
  terminalOS,
  hideWelcome,
  showWelcome,
  startShutdown,
  endShutdown,
} from 'containers/App/actions';

import {
  selectMenuItem,
  hideDesktop,
  showDesktop,
} from 'containers/Desktop/actions';

import {
  turnOff,
} from 'containers/Case/actions';

import PowerTab from './PowerTab';

function mapDispatchToProps(dispatch) {
  return {
    turnOffPC: bindActionCreators(turnOff, dispatch),
    loadOSPC: bindActionCreators(loadOS, dispatch),
    terminalOSPC: bindActionCreators(terminalOS, dispatch),
    hideWelcomeScene: bindActionCreators(hideWelcome, dispatch),
    showWelcomeScene: bindActionCreators(showWelcome, dispatch),
    hideDesktopScene: bindActionCreators(hideDesktop, dispatch),
    showDesktopScene: bindActionCreators(showDesktop, dispatch),
    selectMenuItemId: bindActionCreators(selectMenuItem, dispatch),
    startShutdownPC: bindActionCreators(startShutdown, dispatch),
    endShutdownPC: bindActionCreators(endShutdown, dispatch),
  };
}

export default connect(null, mapDispatchToProps)(PowerTab);
