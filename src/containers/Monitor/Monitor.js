import React, { PureComponent } from 'react';

import PowerIcon from 'icons/Power';
import { WHITE_LED } from 'utils/colors';

import {
  MonitorContainer,
  MonitorMain,
  MonitorShelf,
  MonitorBottom,
  MonitorScreen,
  MonitorPowerButton,
  MonitorScreenOff,
} from 'components/MonitorView';

import OSLoading from 'components/OSLoading';
import WelcomeScene from 'components/WelcomeScene';
import ShutdownScene from 'components/ShutdownScene';

import Desktop from 'containers/Desktop';

import {
  POWER_STATE,
} from 'containers/Case/constants';

import {
  MONITOR_STATE,
} from './constants';

class Monitor extends PureComponent {
  getPowerColor = () => {
    if (this.props.monitorState === MONITOR_STATE.ON) {
      return WHITE_LED.ON;
    }
    return WHITE_LED.OFF;
  }

  handleMonitorPower = () => {
    const { turnOffMonitor, turnOnMonitor } = this.props;
    if (this.props.monitorState === MONITOR_STATE.ON) {
      turnOffMonitor();
    } else {
      turnOnMonitor();
    }
  }

  render() {
    const { monitorState, os, powerState } = this.props;
    return (
      <MonitorContainer>
        <MonitorMain>
          <MonitorScreen>
            {!os.loaded && powerState === POWER_STATE.ON ? <OSLoading /> : null}
            {os.loaded && os.welcomeVisible ? <WelcomeScene /> : null}
            {os.loaded && os.shutingDown ? <ShutdownScene /> : null}
            <Desktop />
          </MonitorScreen>
          {monitorState === MONITOR_STATE.OFF ? <MonitorScreenOff /> : null}
          <MonitorPowerButton onClick={this.handleMonitorPower}>
            <PowerIcon color={this.getPowerColor()} size={16} />
          </MonitorPowerButton>
        </MonitorMain>
        <MonitorShelf />
        <MonitorBottom />
      </MonitorContainer>
    );
  }
}

export default Monitor;
