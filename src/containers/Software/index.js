import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';

import Software from './Software';
import {
  makeSelectSoftwareId,
} from './selectors';
import {
  closeSoftware,
} from './actions';

const mapStateTopProps = createStructuredSelector({
  currentSoftwareId: makeSelectSoftwareId(),
});

function mapDispatchToProps(dispatch) {
  return {
    closeCurrentSoftware: bindActionCreators(closeSoftware, dispatch),
  };
}

export default connect(mapStateTopProps, mapDispatchToProps)(Software);
