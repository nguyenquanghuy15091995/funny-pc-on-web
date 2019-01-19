import React, { PureComponent } from 'react';

import {
  DesktopContainer,
  MainMenu,
  MenuItem,
  MenuItemLabel,
} from 'components/DesktopView';

import PowerIcon from 'icons/Power';
import AppsIcon from 'icons/Apps';
import SettingIcon from 'icons/Setting';

class Desktop extends PureComponent {
  render() {
    const { visible } = this.props;
    if (!visible) return null;
    return (
      <DesktopContainer>
        <MainMenu>
          <MenuItem>
            <PowerIcon color="#d50000" size={30} />
            <MenuItemLabel>Power</MenuItemLabel>
          </MenuItem>
          <MenuItem>
            <AppsIcon color="#6200ea" size={30} />
            <MenuItemLabel>Apps</MenuItemLabel>
          </MenuItem>
          <MenuItem>
            <SettingIcon color="#424242" size={30} />
            <MenuItemLabel>Setting</MenuItemLabel>
          </MenuItem>
        </MainMenu>
      </DesktopContainer>
    );
  }
}

export default Desktop;
