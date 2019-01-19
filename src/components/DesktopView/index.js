import styled, { keyframes } from 'styled-components';
import DesktopImg from 'images/desktop_bg.jpg';

const LoadingAnimation = keyframes`
  0% { background-color: #333; }
  10% { background-color: #3f51b5; }
  20% { background-image: linear-gradient(to right, rgba(69, 39, 160, 1), rgba(69, 39, 160, 1)), url('${DesktopImg}'); }
  30% { background-image: linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('${DesktopImg}'); }
  40% { background-image: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('${DesktopImg}'); }
  50% { background-image: linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('${DesktopImg}'); }
  60% { background-image: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${DesktopImg}'); }
  70% { background-image: linear-gradient(to right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('${DesktopImg}'); }
  80% { background-image: linear-gradient(to right, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('${DesktopImg}'); }
  90% { background-image: linear-gradient(to right, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('${DesktopImg}'); }
  100% { background-image: url('${DesktopImg}'); }
`;

export const DesktopContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  animation-name: ${LoadingAnimation};
  animation-duration: 1s;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
`;

const MenuAnimation = keyframes`
  from { height: 0px; }
  to { height: 70px; }
`;

export const MainMenu = styled.div`
  position: absolute;
  border-radius: 5px 5px 3px 3px;
  max-width: 90%;
  height: 0px;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
  background-image: linear-gradient(to right, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.65), rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.4));
  display: flex;
  justify-content: space-between;
  align-items: center;
  animation-name: ${MenuAnimation};
  animation-delay: 1s;
  animation-duration: 0.25s;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
  padding: 0px 20px;
`;

const MenuItemAnimation = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const MenuItem = styled.div`
  opacity: 0;
  cursor: pointer;
  animation-name: ${MenuItemAnimation};
  animation-delay: 1.25s;
  animation-duration: 0.25s;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
  padding: 10px 10px 0px 10px;
  text-align: center;
  min-width: 100px;
  &:hover {
    text-decoration: underline;
  }
`;

export const MenuItemLabel = styled.div`
  opacity: 0.8;
  color: #333;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 1rem;
  text-decoration: inherit;
`;
