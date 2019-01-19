import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

const DateTimeViewAnimation = keyframes`
  from { opacity: 0; }
  to { opacity: 0.8; }
`;

const DateTimeViewContainer = styled.span`
  opacity: 0;
  color: #333;
  font-weight: 700;
  font-size: 0.8rem;
  animation-name: ${DateTimeViewAnimation};
  animation-delay: 1.25s;
  animation-duration: 0.15s;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
`;

class DateTimeView extends Component {
  constructor(props) {
    super(props);
    const date = this.getTimeString();
    this.state = {
      time: date
    }
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      var date = this.getTimeString();
      this.setState({
        time: date
      })
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  getTimeString() {
    const date = new Date(Date.now()).toLocaleString();
    return date;
  }

  render() {
    return (
      <DateTimeViewContainer>{this.state.time}</DateTimeViewContainer>
    );
  }
}

export default DateTimeView;
