import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

const LoaingAnimation = keyframes`
  from { background-color: #3f51b5; }
  to { background-color: #311b92; }
`;

const WelcomeSceneContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  animation-name: ${LoaingAnimation};
  animation-duration: 0.5s;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
`;

const LabelAnimation = keyframes`
  from { color: transparent; }
  to { color: #FFF; }
`;

const WelcomeSceneLabel = styled.h1`
  color: transparent;
  text-align: center;
  font-size: 4em;
  font-weight: 700;
  width: 100%;
  margin: 10px 0px;
  animation-name: ${LabelAnimation};
  animation-delay: 0.5s;
  animation-direction: alternate;
  animation-duration: 0.75s;
  animation-fill-mode: forwards;
`;

class WelcomeScene extends Component {
  render() {
    return (
      <WelcomeSceneContainer>
        <WelcomeSceneLabel>Welcome!</WelcomeSceneLabel>
      </WelcomeSceneContainer>
    );
  }
}

export default WelcomeScene;
