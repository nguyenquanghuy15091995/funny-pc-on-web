import React, { PureComponent } from 'react';

import {
  SettingTabContainer,
  SettingMenu,
  SettingMenuContent,
  SettingMenuItem,
  SettingMenuItemActive,
} from 'components/SettingTabView';

import {
  SETTING_MENU_ITEMS,
} from './constants';

import DeviceInfo from './DeviceInfo';

class SettingTab extends PureComponent {
  componentWillUnmount() {
    const { doSelectSettingItem } = this.props;
    doSelectSettingItem(SETTING_MENU_ITEMS.DEVICE_INFO.id);
  }

  render() {
    const { setting, doSelectSettingItem } = this.props;
    return (
      <SettingTabContainer>
        <SettingMenu>
          {
            SETTING_MENU_ITEMS.ARRAY.map((item) => (
              <SettingMenuItem
                key={item.id}
                onClick={() => doSelectSettingItem(item.id)}
                selected={setting.settingItemId === item.id}
              >
                {item.name}
                {setting.settingItemId === item.id ? <SettingMenuItemActive /> : null}
              </SettingMenuItem>
            ))
          }
        </SettingMenu>
        <SettingMenuContent>
          {SETTING_MENU_ITEMS.DEVICE_INFO.id === setting.settingItemId ? <DeviceInfo /> : null}
        </SettingMenuContent>
      </SettingTabContainer>
    );
  }
}

export default SettingTab;
