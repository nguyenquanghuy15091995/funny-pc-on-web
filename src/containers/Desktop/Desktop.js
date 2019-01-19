import React, { PureComponent } from 'react';

import {
  DesktopContainer,
  MainMenu,
  MenuItem,
  MenuItemLabel,
  TopbarContainer,
  MenuItemActive,
  MenuItemNormal,
} from 'components/DesktopView';

import DateTimeView from 'components/DateTimeView';

import {
  MENU_ITEMS,
} from './constants';

class Desktop extends PureComponent {
  render() {
    const { visible, currentMenuItemId, selectMenuItemId } = this.props;
    if (!visible) return null;
    return (
      <DesktopContainer>
        <TopbarContainer><DateTimeView /></TopbarContainer>
        <MainMenu>
          {
            MENU_ITEMS.map((item) => (
              <MenuItem onClick={() => selectMenuItemId(item.id)}>
                {currentMenuItemId === item.id ? <MenuItemActive /> : <MenuItemNormal />}
                {item.icon}
                <MenuItemLabel>{item.name}</MenuItemLabel>
              </MenuItem>
            ))
          }
        </MainMenu>
      </DesktopContainer>
    );
  }
}

export default Desktop;
