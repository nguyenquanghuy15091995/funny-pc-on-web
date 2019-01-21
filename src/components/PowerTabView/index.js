import styled, { keyframes } from 'styled-components';

export const PowerContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  overflow: hidden;
`;

const PowerItemAnimation = keyframes`
  from {
    opacity: 0;
    margin: 0px 60px;
  }
  to {
    opacity: 1;
    margin: 0px 20px;
  }
`;

export const PowerItem = styled.div`
  opacity: 0;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px 20px;
  margin: 0px 60px;
  background-color: rgba(0, 0, 0, 0.65);
  font-size: 1.5rem;
  font-weight: 700;
  min-width: 170px;
  color: #fafafa;
  border-radius: 3px;
  animation-name: ${PowerItemAnimation};
  animation-duration: 0.2s;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
 `;

export const PowerItemLabel = styled.span`
  font-size: inherit;
  font-weight: inherit;
  color: inherit;
  user-select: none;
`;
