import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';

import {
  loadOS,
  terminalOS,
  hideWelcome,
  showWelcome,
} from 'containers/App/actions';
import {
  makeSelectSetting,
} from 'containers/App/selectors';
import {
  closeSoftware,
} from 'containers/Software/actions';
import {
  hideDesktop,
  showDesktop,
  selectMenuItem,
} from 'containers/Desktop/actions';
import Case from './Case';
import {
  makeSelectPowerState,
} from './selectors';
import {
  turnOff,
  turnOn,
} from './actions';


const mapStateToProps = createStructuredSelector({
  powerState: makeSelectPowerState(),
  setting: makeSelectSetting(),
});

function mapDispatchToProps(dispatch) {
  return {
    closeCurrentSoftware: bindActionCreators(closeSoftware, dispatch),
    turnOffPC: bindActionCreators(turnOff, dispatch),
    turnOnPC: bindActionCreators(turnOn, dispatch),
    loadOSPC: bindActionCreators(loadOS, dispatch),
    terminalOSPC: bindActionCreators(terminalOS, dispatch),
    hideWelcomeScene: bindActionCreators(hideWelcome, dispatch),
    showWelcomeScene: bindActionCreators(showWelcome, dispatch),
    hideDesktopScene: bindActionCreators(hideDesktop, dispatch),
    showDesktopScene: bindActionCreators(showDesktop, dispatch),
    selectMenuItemId: bindActionCreators(selectMenuItem, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Case);
