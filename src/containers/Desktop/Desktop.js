import React, { PureComponent } from 'react';

import {
  DesktopContainer,
  MainMenu,
  MenuItem,
  MenuItemLabel,
  TopbarContainer,
  MenuItemActive,
  MenuItemNormal,
  ContentContainer,
  ContentView,
} from 'components/DesktopView';

import DateTimeView from 'components/DateTimeView';

import PowerTab from 'containers/PowerTab';

import {
  MENU_ITEMS,
} from './constants';

class Desktop extends PureComponent {
  handleMenuClick = (id) => {
    const { currentMenuItemId, selectMenuItemId } = this.props;
    if (id !== currentMenuItemId) {
      selectMenuItemId(id);
    }
  }

  render() {
    const { visible, currentMenuItemId } = this.props;
    if (!visible) return null;
    return (
      <DesktopContainer>
        <TopbarContainer><DateTimeView /></TopbarContainer>
        <ContentContainer>
          <ContentView>
            {MENU_ITEMS.POWER.id === currentMenuItemId ? <PowerTab /> : null}
          </ContentView>
        </ContentContainer>
        <MainMenu>
          {
            MENU_ITEMS.ARRAY.map((item) => (
              <MenuItem onClick={() => this.handleMenuClick(item.id)}>
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
