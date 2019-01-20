import React, { Component } from 'react';
import styled from 'styled-components';

import CircleSpinner from 'components/CircleSpinner';

const ShutdownSceneContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #311b92;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ShutdownLabel = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
  color: #fff;
  margin-left: 20px;
`;

class ShutdownScene extends Component {
  render() {
    return (
      <ShutdownSceneContainer>
        <CircleSpinner />
        <ShutdownLabel>Shutting down</ShutdownLabel>
      </ShutdownSceneContainer>
    );
  }
}

export default ShutdownScene;
