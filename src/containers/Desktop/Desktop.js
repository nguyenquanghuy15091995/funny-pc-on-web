import React, { PureComponent } from 'react';

import {
  DesktopContainer,
} from '../../components/DesktopView';

class Desktop extends PureComponent {
  render() {
    const { visible } = this.props;
    if (!visible) return null;
    return (
      <DesktopContainer>

      </DesktopContainer>
    );
  }
}

export default Desktop;
