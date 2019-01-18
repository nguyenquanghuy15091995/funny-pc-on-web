import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';

import {
  loadOS,
  terminalOS,
} from '../App/actions';

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
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Case);
