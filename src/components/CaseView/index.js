import styled, { css, keyframes } from 'styled-components';
import { WHITE_LED } from 'utils/colors';

const TopHeight = 50;
const BotHeight = 40;

export const PowerButton = styled.button`
  background-color: transparent;
  outline: none !important;
  border: none;
  border-radius: 50%;
  padding: 5px;
  cursor: pointer;
  text-align: center;
  &:active {
    margin-top: 2px;
  }
`;

export const CaseContainer = styled.div`
  position: relative;
  background-color: rgba(0, 0, 0, 0.9);
  height: 500px;
  padding: 0px 20px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const TopCase = styled.div`
  width: 100%;
  height: ${TopHeight}px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 50px 0px 0px;
`;

export const BottomCase = styled.div`
  height: ${BotHeight}px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 5%;
`;

export const BottomItem = styled.div`
  width: 10%;
  height: 5px;
  border-radius: 1000px;
  background-color: ${props => props.color ? props.color : WHITE_LED.OFF};
  box-shadow: 0px 0px 15px ${props => props.color && props.color !== WHITE_LED.OFF ? props.color : 'transparent'};
  ${props => props.color && props.color !== WHITE_LED.OFF ? `filter: blur(1px);` : ''}
`;

export const ItemList = styled.div`
  height: calc(100% - ${BotHeight + TopHeight}px);
  width: 100%;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 3px 30px;
  z-index: 2;
`;

export const USBContainer = styled.span`
  transform: rotate(90deg);
`;

export const FansContainer = styled.div`
  height: calc(100% - ${BotHeight + TopHeight}px);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px 0px;
`;

export const FansLedView = styled.div`
  ${props => props.color && props.color !== WHITE_LED.OFF ? `filter: blur(2px);` : ''}
`;

const FansAnimationStart = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

export const FansCssStart = css`
  animation-name: ${FansAnimationStart};
  animation-duration: 0.1s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`;

const FansAnimationOff = keyframes`
  0% { transform: rotate(0deg); }
  10% { transform: rotate(360deg); }
  20% { transform: rotate(684deg); }
  30% { transform: rotate(972deg); }
  40% { transform: rotate(1224deg); }
  50% { transform: rotate(1440deg); }
  60% { transform: rotate(1620deg); }
  70% { transform: rotate(1764deg); }
  80% { transform: rotate(1872deg); }
  90% { transform: rotate(1944deg); }
  100% { transform: rotate(1980deg); }
`;

export const FansCssOff = css `
  animation-name: ${FansAnimationOff};
  animation-duration: 2.5s;
  animation-timing-function: linear;
`;
