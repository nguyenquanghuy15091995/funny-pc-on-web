import React, { Component } from 'react';
import styled from 'styled-components';

const SVG = styled.svg`
  ${props => props.styledCSS}
`;

class Apps extends Component {
  render() {
    const size = this.props.size ? this.props.size : 24;
    const color = this.props.color ? this.props.color : '#333';
    const className = this.props.className ? this.props.className : '';
    const style = this.props.style ? this.props.style : {};
    const styledCSS = this.props.styledCSS ? this.props.styledCSS : '';
    return (
      <SVG xmlns="http://www.w3.org/2000/svg" className={className} style={style} width={`${size}`} height={`${size}`} styledCSS={styledCSS} viewBox="0 0 24 24">
        <path fill={color} d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"/>
        <path d="M0 0h24v24H0z" fill="none"/>
      </SVG>
    );
  }
}

export default Apps;
