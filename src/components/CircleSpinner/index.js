import styled, { keyframes } from 'styled-components';

const SpinnerAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const CircleSpinner = styled.div`
  display: inline-block;
  width: 46px;
  height: 46px;
  &::after {
    content: " ";
    display: block;
    width: 46px;
    height: 46px;
    margin: 1px;
    border-radius: 50%;
    border: 5px solid #fff;
    border-color: #fff transparent #fff transparent;
    animation: ${SpinnerAnimation} 1.2s linear infinite;
  }
`;

export default CircleSpinner;
