import React, { Component } from 'react';
import styled from 'styled-components';

const SVG = styled.svg`
  ${props => props.styledCSS}
`;

class PowerOff extends Component {
  render() {
    const size = this.props.size ? this.props.size : 24;
    const color = this.props.color ? this.props.color : '#333';
    const className = this.props.className ? this.props.className : '';
    const style = this.props.style ? this.props.style : {};
    const styledCSS = this.props.styledCSS ? this.props.styledCSS : '';
    return (
      <SVG xmlns="http://www.w3.org/2000/svg" className={className} style={style} width={`${size}`} height={`${size}`} styledCSS={styledCSS} viewBox="0 0 24 24">
        <path fill="none" d="M0 0h24v24H0V0z" />
        <path fill={color} d="M18 14.49V9c0-1-1.01-2.01-2-2V3h-2v4h-4V3H8v2.48l9.51 9.5.49-.49zm-1.76 1.77L7.2 7.2l-.01.01L3.98 4 2.71 5.25l3.36 3.36C6.04 8.74 6 8.87 6 9v5.48L9.5 18v3h5v-3l.48-.48L19.45 22l1.26-1.28-4.47-4.46z" />
      </SVG>
    );
  }
}

export default PowerOff;
