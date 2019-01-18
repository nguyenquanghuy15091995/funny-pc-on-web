import React, { PureComponent } from 'react';

import PowerIcon from 'icons/Power';
import USBIcon from 'icons/USB';
import FansIcon from 'icons/Fans';

import {
  TopCase,
  BottomCase,
  CaseContainer,
  FansContainer,
  FansCssStart,
  FansCssOff,
  USBContainer,
  BottomItem,
  PowerButton,
} from 'components/CaseView';

import { POWER_STATE } from './constants';

class Case extends PureComponent {
  state = {
    isOff: false,
  }

  getFansCSS = () => {
    const { powerState } = this.props;
    if (powerState === POWER_STATE.ON) {
      return FansCssStart;
    } if (powerState === POWER_STATE.OFF) {
      return FansCssOff;
    }
    return '';
  }

  getLedColor = () => {
    const { powerState } = this.props;
    if (powerState === POWER_STATE.ON) {
      return 'rgba(255, 255, 255, 0.8)';
    } else if (powerState === POWER_STATE.OFF) {
      return 'rgba(255, 255, 255, 0.2)';
    }
    return 'rgba(255, 255, 255, 0.2)';
  }

  handlePowerDown = () => {
    const { powerState, turnOffPC, terminalOSPC } = this.props;
    if (powerState === POWER_STATE.ON) {
      this.powerPressTimer = setTimeout(() => {
        this.setState({
          isOff: true,
        }, () => {
          turnOffPC();
          clearTimeout(this.osLoadingTimer);
          terminalOSPC();
        })
      }, 4000);
    }
  }

  handlePowerUp = () => {
    const { powerState, turnOnPC, loadOSPC } = this.props;
    if (!this.state.isOff && powerState !== POWER_STATE.ON) {
      turnOnPC();
      this.osLoadingTimer = setTimeout(() => {
        loadOSPC();
      }, 7000);
    }
    clearTimeout(this.powerPressTimer);
    this.setState({
      isOff: false,
    });
  }

  render() {
    return (
      <CaseContainer>
        <TopCase>
          <PowerButton
            onTouchStart={this.handlePowerDown}
            onTouchEnd={this.handlePowerUp}
            onMouseDown={this.handlePowerDown}
            onMouseUp={this.handlePowerUp}
          >
            <PowerIcon color={this.getLedColor()} />
          </PowerButton>
          <USBContainer><USBIcon color={this.getLedColor()} /></USBContainer>
          <USBContainer><USBIcon color={this.getLedColor()} /></USBContainer>
        </TopCase>
        <FansContainer>
          <FansIcon styledCSS={this.getFansCSS()} color={this.getLedColor()} size={100} />
          <FansIcon styledCSS={this.getFansCSS()} color={this.getLedColor()} size={100} />
          <FansIcon styledCSS={this.getFansCSS()} color={this.getLedColor()} size={100} />
        </FansContainer>
        <BottomCase>
          <BottomItem color={this.getLedColor()} />
          <BottomItem color={this.getLedColor()} />
          <BottomItem color={this.getLedColor()} />
          <BottomItem color={this.getLedColor()} />
          <BottomItem color={this.getLedColor()} />
        </BottomCase>
      </CaseContainer>
    );
  }
}

export default Case;
