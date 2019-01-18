import styled from 'styled-components';

import BackgroundImg from 'images/app_bg.jpg';

export const AppContainer = styled.div`
  background-image: url('${BackgroundImg}');
  background-position: center;
  background-size: auto;
  background-repeat: no-repeat;
  height: 100vh;
`;

export const ProductPanel = styled.div`
  width: 1115px;
  border-radius: 5px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(255, 255, 255, 0.9);
  padding: 20px;
`;
