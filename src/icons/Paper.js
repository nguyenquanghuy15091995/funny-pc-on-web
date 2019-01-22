import React, { Component } from 'react';
import styled from 'styled-components';

const SVG = styled.svg`
  ${props => props.styledCSS}
`;

class Paper extends Component {
  render() {
    const size = this.props.size ? this.props.size : 24;
    const color = this.props.color ? this.props.color : '#333';
    const className = this.props.className ? this.props.className : '';
    const style = this.props.style ? this.props.style : {};
    const styledCSS = this.props.styledCSS ? this.props.styledCSS : '';
    return (
      <SVG xmlns="http://www.w3.org/2000/svg" className={className} style={style} width={`${size}`} height={`${size}`} styledCSS={styledCSS} viewBox="0 0 24 24">
        <path d="M0 0h24v24H0z" fill="none" />
        <path fill={color} d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
      </SVG>
    );
  }
}

export default Paper;
