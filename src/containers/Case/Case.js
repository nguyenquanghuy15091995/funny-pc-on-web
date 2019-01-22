import React, { PureComponent } from 'react';

import PowerIcon from 'icons/Power';
import USBIcon from 'icons/USB';
import FansIcon from 'icons/Fans';

import { WHITE_LED } from 'utils/colors';

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
  FansLedView,
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
    const { powerState, setting } = this.props;
    if (powerState === POWER_STATE.ON) {
      return setting.ledColor.ON;
    } else if (powerState === POWER_STATE.OFF) {
      return setting.ledColor.OFF;
    }
    return setting.ledColor.OFF;
  }

  handlePowerDown = () => {
    const { powerState, turnOffPC, terminalOSPC, hideWelcomeScene, hideDesktopScene } = this.props;
    if (powerState === POWER_STATE.ON) {
      this.powerPressTimer = setTimeout(() => {
        this.setState({
          isOff: true,
        }, () => {
          turnOffPC();
          clearTimeout(this.osLoadingTimer);
          terminalOSPC();
          hideWelcomeScene();
          hideDesktopScene();
        })
      }, 4000);
    }
  }

  handlePowerUp = () => {
    const { powerState, turnOnPC, loadOSPC, showWelcomeScene, hideWelcomeScene, showDesktopScene } = this.props;
    if (!this.state.isOff && powerState !== POWER_STATE.ON) {
      turnOnPC();
      this.osLoadingTimer = setTimeout(() => {
        loadOSPC();
        showWelcomeScene();
        this.welcomeSceneTimer = setTimeout(() => {
          hideWelcomeScene();
          showDesktopScene();
        }, 3000);
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
        <FansContainer color={this.getLedColor()}>
          <FansLedView color={this.getLedColor()}>
            <FansIcon styledCSS={this.getFansCSS()} color={this.getLedColor()} size={100} />
          </FansLedView>
          <FansLedView color={this.getLedColor()}>
            <FansIcon styledCSS={this.getFansCSS()} color={this.getLedColor()} size={100} />
          </FansLedView>
          <FansLedView color={this.getLedColor()}>
            <FansIcon styledCSS={this.getFansCSS()} color={this.getLedColor()} size={100} />
          </FansLedView>
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
