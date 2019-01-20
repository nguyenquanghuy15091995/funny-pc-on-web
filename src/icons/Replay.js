import React, { Component } from 'react';
import styled from 'styled-components';

const SVG = styled.svg`
  ${props => props.styledCSS}
`;

class Replay extends Component {
  render() {
    const size = this.props.size ? this.props.size : 24;
    const color = this.props.color ? this.props.color : '#333';
    const className = this.props.className ? this.props.className : '';
    const style = this.props.style ? this.props.style : {};
    const styledCSS = this.props.styledCSS ? this.props.styledCSS : '';
    return (
      <SVG xmlns="http://www.w3.org/2000/svg" className={className} style={style} width={`${size}`} height={`${size}`} styledCSS={styledCSS} viewBox="0 0 24 24">
        <path d="M0 0h24v24H0z" fill="none" />
        <path fill={color} d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z" />
      </SVG>
    );
  }
}

export default Replay;
