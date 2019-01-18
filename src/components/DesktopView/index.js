import styled, { keyframes } from 'styled-components';
import DesktopImg from 'images/desktop_bg.jpg';

const LoaingAnimation = keyframes`
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
  width: 100%;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  animation-name: ${LoaingAnimation};
  animation-duration: 1s;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
`;
