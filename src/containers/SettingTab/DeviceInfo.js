import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import {
  DeviceItemContentContainer,
  DeviceInfoTitle,
} from 'components/SettingTabView';

class DeviceInfo extends Component {
  render() {
    return (
      <DeviceItemContentContainer>
        <DeviceInfoTitle>Troll PC</DeviceInfoTitle>
        <Container fluid>
          <Row>
            <Col md={4} style={{ textAlign: 'right' }}>CPU</Col>
            <Col md={8}>: i7-6969</Col>
          </Row>
          <Row>
            <Col md={4} style={{ textAlign: 'right' }}>GPU</Col>
            <Col md={8}>: RTX-6969</Col>
          </Row>
          <Row>
            <Col md={4} style={{ textAlign: 'right' }}>RAM</Col>
            <Col md={8}>: 69 GB</Col>
          </Row>
          <Row>
            <Col md={4} style={{ textAlign: 'right' }}>ROM</Col>
            <Col md={8}>: 69 TB</Col>
          </Row>
          <Row>
            <Col md={4} style={{ textAlign: 'right' }}>For fun</Col>
            <Col md={8}>: YES</Col>
          </Row>
        </Container>
      </DeviceItemContentContainer>
    );
  }
}

export default DeviceInfo;
