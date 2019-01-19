import styled, { css } from 'styled-components';

export const MonitorContainer = styled.div`
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MonitorMain = styled.div`
  position: relative;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.9);
  height: 370px;
  width: 100%;
`;

export const MonitorShelf = styled.div`
  width: 25%;
  background-color: rgba(0, 0, 0, 0.9);
  height: 20px;
`;

export const MonitorBottom = styled.div`
  width: 40%;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.9);
  height: 10px;
`;

const ScreenCSS = css`
  border-radius: 2px;
  position: absolute;
  width: 96%;
  height: 87%;
  top: 50%;
  left: 50%;
`;

export const MonitorScreen = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  transform: translate(-50%, -53%);
  ${ScreenCSS}
`;

export const MonitorScreenOff = styled.div`
  background-image: linear-gradient(to right, #000, #424242, #000);
  z-index: 100;
  transform: translate(-50%, -53%);
  ${ScreenCSS}
  width: 96%;
  height: 88%;
`;

export const MonitorPowerButton = styled.button`
  position: absolute;
  bottom: 2%;
  right: 2%;
  padding: 0px 0px 1px 0px;
  min-height: 0;
  border: none;
  outline: none !important;
  background-color: transparent;
  cursor: pointer;
  &:active {
    padding: 0;
  }
`;
