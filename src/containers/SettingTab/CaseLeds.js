import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import {
  WHITE_LED,
  BLUE_LED,
  RED_LED,
  YELLOW_LED,
} from '../../utils/colors';

import {
  DeviceItemContentContainer,
  DeviceInfoTitle,
  LedSelectButton,
  ColorPoint,
} from 'components/SettingTabView';

class CaseLeds extends Component {
  render() {
    const { ledColor, selectCaseLedColor } = this.props;
    return (
      <DeviceItemContentContainer>
        <DeviceInfoTitle>Case Leds Selector</DeviceInfoTitle>
        <Container fluid>
          <Row>
            <Col md={6}>
              <LedSelectButton onClick={() => selectCaseLedColor(RED_LED)} selected={ledColor.ON === RED_LED.ON}><ColorPoint color={RED_LED.ON} />Red</LedSelectButton>
            </Col>
            <Col md={6}>
              <LedSelectButton onClick={() => selectCaseLedColor(BLUE_LED)} selected={ledColor.ON === BLUE_LED.ON}><ColorPoint color={BLUE_LED.ON} />Blue</LedSelectButton>
            </Col>
            <Col md={6}>
              <LedSelectButton onClick={() => selectCaseLedColor(YELLOW_LED)} selected={ledColor.ON === YELLOW_LED.ON}><ColorPoint color={YELLOW_LED.ON} />Yellow</LedSelectButton>
            </Col>
            <Col md={6}>
              <LedSelectButton onClick={() => selectCaseLedColor(WHITE_LED)} selected={ledColor.ON === WHITE_LED.ON}><ColorPoint color={WHITE_LED.ON} />White</LedSelectButton>
            </Col>
          </Row>
        </Container>
      </DeviceItemContentContainer>
    );
  }
}

export default CaseLeds;
