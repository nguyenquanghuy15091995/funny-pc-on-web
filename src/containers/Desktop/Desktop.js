import React, { PureComponent } from 'react';
import { Container, Row, Col } from 'reactstrap';

import {
  DesktopContainer,
  MainMenu,
  MenuItem,
  MenuItemLabel,
  TopbarContainer,
  MenuItemActive,
  MenuItemNormal,
  ContentContainer,
  AppTabContainerContainer,
  AppTabItem,
} from 'components/DesktopView';

import DateTimeView from 'components/DateTimeView';

import PowerTab from 'containers/PowerTab';
import SettingTab from 'containers/SettingTab';
import Software from 'containers/Software';
import {
  SOFTWARE_LIST,
} from '../Software/constants';

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
    const { visible, currentMenuItemId, softwareVisible, openNewSoftware } = this.props;
    if (!visible) return null;
    return (
      <DesktopContainer>
        {
          softwareVisible ? <Software /> : null
        }
        <TopbarContainer><DateTimeView /></TopbarContainer>
        <ContentContainer>
          {MENU_ITEMS.POWER.id === currentMenuItemId ? <PowerTab /> : null}
          {MENU_ITEMS.SETTING.id === currentMenuItemId ? <SettingTab /> : null}
          {MENU_ITEMS.APPS.id === currentMenuItemId ? <AppTabContainerContainer>
            <Container fluid>
              <Row>
                {
                  SOFTWARE_LIST.ARRAY.map((item) => (
                    <Col md={3} key={item.id}>
                      <AppTabItem onClick={() => openNewSoftware(item.id)}>
                        {item.icon}
                        {item.name}
                      </AppTabItem>
                    </Col>
                  ))
                }
              </Row>
            </Container>
          </AppTabContainerContainer> : null}
        </ContentContainer>
        <MainMenu>
          {
            MENU_ITEMS.ARRAY.map((item) => (
              <MenuItem key={item.id} onClick={() => this.handleMenuClick(item.id)}>
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
