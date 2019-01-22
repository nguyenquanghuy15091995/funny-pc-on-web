import styled, { css, keyframes } from 'styled-components';

const SettingTabContainerAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const SettingTabContainer = styled.div`
  position: relative;
  overflow: hidden;
  height: inherit;
  height: 100%;
  width: 100%;
  padding: 10px;
  display: flex;
  animation-name: ${SettingTabContainerAnimation};
  animation-duration: 0.2s;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
`;

const ScrollbarMenu = css`
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.25);
  }
  &::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.4);
  }
`;

export const SettingMenu = styled.div`
  display: flex;
  flex-direction: column;
  width: 33%;
  height: 100%;
  overflow-y: auto;
  ${ScrollbarMenu}
`;

export const SettingMenuContent = styled.div`
  display: flex;
  width: 67%;
  background-color: rgba(0, 0, 0, 0.85);
  margin: 3px 5px 3px 3px;
  border-radius: 2px;
  padding: 10px;
  color: #FFF;
`;

export const SettingMenuItem = styled.div`
  position: relative;
  cursor: pointer;
  padding: 10px;
  margin: 3px 5px;
  background-color: ${props => props.selected ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.65)'};
  border-radius: 2px;
  color: #FFF;
  overflow-y: auto;
  ${ScrollbarMenu}
  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;

const SettingMenuItemAnimation = keyframes`
  from {
    opacity: 0;
    width: 0%;
  }
  to {
    opacity: 1;
    width: 20%;
  }
`;

export const SettingMenuItemActive = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  background-color: #FFF;
  width: 0%;
  clip-path: polygon(0 50%, 100% 0, 100% 100%);
  z-index: 5;
  animation-name: ${SettingMenuItemAnimation};
  animation-duration: 0.15s;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
`;

export const DeviceItemContentContainer = styled.div`
  animation-name: ${SettingTabContainerAnimation};
  animation-duration: 0.2s;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
  width: 100%;
`;

export const DeviceInfoTitle = styled.div`
  color: inherit;
  font-size: 1.2rem;
  font-weight: 700;
`;

export const LedSelectButton = styled.button`
  margin: 10px 0px;
  outline: none !important;
  cursor: pointer;
  color:  ${props => props.selected ? '#333' : '#FFF'};
  font-weight: 700;
  border: 1px solid transparent;
  border-radius: 500px;
  width: 100%;
  min-width: 50px;
  background-color: ${props => props.selected ? 'rgba(255, 255, 255, 0.7)' : '#333'};
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    border: 1px solid #FFF;
  }
`;

export const ColorPoint = styled.div`
  margin-right: 10px;
  border-radius: 50%;
  padding: 5px;
  background-color: ${props => props.color ? props.color : 'transparent'};
  box-shadow: 0px 0px 10px #888;
`;
