import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

const LoadingAnimation = keyframes`
  0% { background-color: #333; }
  10% { background-color: #3f51b5; }
  50% { background-color: #3f51b5; }
  100% { background-color: #311b92; }
`;

const OSLoadingContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  animation-name: ${LoadingAnimation};
  animation-duration: 2s;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
`;

const LabelAnimation = keyframes`
  from { color: transparent; }
  to { color: #FFF; }
`;

const ProgessAnimation = keyframes`
  0% { background-image: linear-gradient(to right, #f44336, #f44336, #f44336, #f44336, #f44336, #f44336, #f44336, #f44336, #f44336, #f44336); }
  5% { background-image: linear-gradient(to right, #b71c1c, #f44336, #f44336, #f44336, #f44336, #f44336, #f44336, #f44336, #f44336, #f44336); }
  20% { background-image: linear-gradient(to right, #f44336, #b71c1c, #f44336, #f44336, #f44336, #f44336, #f44336, #f44336, #f44336, #f44336); }
  30% { background-image: linear-gradient(to right, #f44336, #f44336, #b71c1c, #f44336, #f44336, #f44336, #f44336, #f44336, #f44336, #f44336); }
  40% { background-image: linear-gradient(to right, #f44336, #f44336, #f44336, #b71c1c, #f44336, #f44336, #f44336, #f44336, #f44336, #f44336); }
  50% { background-image: linear-gradient(to right, #f44336, #f44336, #f44336, #f44336, #b71c1c, #f44336, #f44336, #f44336, #f44336, #f44336); }
  60% { background-image: linear-gradient(to right, #f44336, #f44336, #f44336, #f44336, #f44336, #b71c1c, #f44336, #f44336, #f44336, #f44336); }
  70% { background-image: linear-gradient(to right, #f44336, #f44336, #f44336, #f44336, #f44336, #f44336, #b71c1c, #f44336, #f44336, #f44336); }
  80% { background-image: linear-gradient(to right, #f44336, #f44336, #f44336, #f44336, #f44336, #f44336, #f44336, #b71c1c, #f44336, #f44336); }
  90% { background-image: linear-gradient(to right, #f44336, #f44336, #f44336, #f44336, #f44336, #f44336, #f44336, #f44336, #b71c1c, #f44336); }
  100% { background-image: linear-gradient(to right, #f44336, #f44336, #f44336, #f44336, #f44336, #f44336, #f44336, #f44336, #f44336, #b71c1c); }
`;

const OSLoadingLabel = styled.h1`
  color: transparent;
  text-align: center;
  font-size: 5em;
  font-weight: 700;
  width: 100%;
  margin: 10px 0px;
  animation-name: ${LabelAnimation};
  animation-direction: alternate;
  animation-fill-mode: forwards;
  animation-delay: 2s;
`;

const OSLoadingVersion = styled.span`
  font-size: 0.4em;
`;

const OSLoadingProgess = styled.div`
  border-radius: 5px;
  margin: 10px 0px;
  width: 60%;
  height: 20px;
  animation-name: ${ProgessAnimation};
  animation-iteration-count: infinite;
  animation-delay: 2s;
  animation-duration: 0.65s;
`;

class OSLoading extends Component {
  render() {
    return (
      <OSLoadingContainer>
        <OSLoadingLabel>OS<OSLoadingVersion> 1.0</OSLoadingVersion></OSLoadingLabel>
        <OSLoadingProgess />
      </OSLoadingContainer>
    );
  }
}

export default OSLoading;
