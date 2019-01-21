import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';

import {
  makeSelectSetting,
} from 'containers/App/selectors';
import {
  selectSettingItem,
} from 'containers/App/actions';

import SettingTab from './SettingTab';

const mapStateToProps = createStructuredSelector({
  setting: makeSelectSetting(),
});

function mapDispatchToProps(dispatch) {
  return {
    doSelectSettingItem: bindActionCreators(selectSettingItem, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingTab);
