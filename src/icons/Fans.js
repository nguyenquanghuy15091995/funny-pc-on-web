import React, { Component } from 'react';
import styled from 'styled-components';

const SVG = styled.svg`
  margin: 10px 0px;
  ${props => props.styledCSS}
`;

class Fans extends Component {
  render() {
    const size = this.props.size ? this.props.size : 24;
    const color = this.props.color ? this.props.color : '#333';
    const className = this.props.className ? this.props.className : '';
    const style = this.props.style ? this.props.style : {};
    const styledCSS = this.props.styledCSS ? this.props.styledCSS : '';
    return (
      <SVG xmlns="http://www.w3.org/2000/svg" className={className} style={style} width={`${size}`} height={`${size}`} styledCSS={styledCSS} viewBox="0 0 24 24">
        <path fill="none" d="M0 0h24v24H0V0zm0 0h24v24H0V0z" />
        <path fill={color} d="M12 12c0-3 2.5-5.5 5.5-5.5S23 9 23 12H12zm0 0c0 3-2.5 5.5-5.5 5.5S1 15 1 12h11zm0 0c-3 0-5.5-2.5-5.5-5.5S9 1 12 1v11zm0 0c3 0 5.5 2.5 5.5 5.5S15 23 12 23V12z" />
      </SVG>
    );
  }
}

export default Fans;
