import React, { PureComponent } from 'react';

import ResetIcon from 'icons/Replay';
import PowerOffIcon from 'icons/PowerOff';

import {
  PowerContainer,
  PowerItem,
  PowerItemLabel,
} from 'components/PowerTabView';

import {
  MENU_ITEMS,
} from 'containers/Desktop/constants';

class PowerTab extends PureComponent {
  handleReset = () => {
    const {
      loadOSPC,
      terminalOSPC,
      hideDesktopScene,
      startShutdownPC,
      endShutdownPC,
      selectMenuItemId,
      hideWelcomeScene,
      showDesktopScene,
      showWelcomeScene,
    } = this.props;
    startShutdownPC();
    hideDesktopScene();
    setTimeout(() => {
      endShutdownPC();
      terminalOSPC();
      selectMenuItemId(MENU_ITEMS.APPS.id);
      setTimeout(() => {
        loadOSPC();
        showWelcomeScene();
        setTimeout(() => {
          hideWelcomeScene();
          showDesktopScene();
        }, 3000);
      }, 7000);
    }, 4000);
  }

  handleShutdown = () => {
    const {
      turnOffPC,
      terminalOSPC,
      hideDesktopScene,
      startShutdownPC,
      endShutdownPC,
      selectMenuItemId,
    } = this.props;
    startShutdownPC();
    hideDesktopScene();
    setTimeout(() => {
      endShutdownPC();
      turnOffPC();
      terminalOSPC();
      selectMenuItemId(MENU_ITEMS.APPS.id);
    }, 4000);
  }

  render() {
    return (
      <PowerContainer>
        <PowerItem onClick={this.handleReset}>
          <ResetIcon color="#fafafa" size={50} />
          <PowerItemLabel>Reset</PowerItemLabel>
        </PowerItem>
        <PowerItem onClick={this.handleShutdown}>
          <PowerOffIcon color="#fafafa" size={50} />
          <PowerItemLabel>Shut Down</PowerItemLabel>
        </PowerItem>
      </PowerContainer>
    );
  }
}

export default PowerTab;
