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
  hideDesktop,
  showDesktop,
} from '../Desktop/actions';
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
});

function mapDispatchToProps(dispatch) {
  return {
    turnOffPC: bindActionCreators(turnOff, dispatch),
    turnOnPC: bindActionCreators(turnOn, dispatch),
    loadOSPC: bindActionCreators(loadOS, dispatch),
    terminalOSPC: bindActionCreators(terminalOS, dispatch),
    hideWelcomeScene: bindActionCreators(hideWelcome, dispatch),
    showWelcomeScene: bindActionCreators(showWelcome, dispatch),
    hideDesktopScene: bindActionCreators(hideDesktop, dispatch),
    showDesktopScene: bindActionCreators(showDesktop, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Case);
