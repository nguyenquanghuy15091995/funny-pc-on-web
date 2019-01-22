import styled, { keyframes } from 'styled-components';

const SoftwareContainerAnimation = keyframes`
  from {
    width: 50%;
    height: 50%;
    opacity: 0;
  }
  to {
    width: 100%;
    height: 100%;
    opacity: 1;
  }
`;

export const SoftwareContainer = styled.div`
  position: absolute;
  opacity: 0;
  width: 50%;
  height: 50%;
  top: 50%;
  left: 50%;
  z-index: 20;
  background-color: #000;
  transform: translate(-50%, -50%);
  animation-name: ${SoftwareContainerAnimation};
  animation-duration: 0.15s;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
`;

export const SoftwareContent = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const SoftwareContentTop = styled.div`
  position: absolute;
  width: 100%;
  height: 30px;
  background-color: #333;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const ContentTopLabel = styled.div`
  color: #FFF;
  flex-grow: 1;
  padding: 0px 10px;
`;

export const ContentTopClose = styled.button`
  padding: 0px 5px;
  outline: none !important;
  min-height: 0px;
  height: 100%;
  min-width: 30px; 
  background-color: rgba(255, 0, 0, 0.7);
  border: none;
  cursor: pointer;
  &:hover {
    background-color: rgba(255, 0, 0, 0.9);;
  }
`;
