import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';

import {
  makeSelectOS,
} from 'containers/App/selectors';

import {
  makeSelectPowerState,
} from 'containers/Case/selectors';

import {
  makeSelecMonitorState,
} from './selectors';
import {
  turnOff,
  turnOn,
} from './actions';
import Monitor from './Monitor';

const mapStateToProps = createStructuredSelector({
  monitorState: makeSelecMonitorState(),
  os: makeSelectOS(),
  powerState: makeSelectPowerState(),
});

function mapDispatchToProps(dispatch) {
  return {
    turnOffMonitor: bindActionCreators(turnOff, dispatch),
    turnOnMonitor: bindActionCreators(turnOn, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Monitor);
