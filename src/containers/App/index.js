import React, { PureComponent } from 'react';
import { Fade, Container, Row, Col } from 'reactstrap';

import Case from 'containers/Case';
import Monitor from 'containers/Monitor';

import { AppContainer, ProductPanel } from './styleds';

class App extends PureComponent {
  render() {
    return (
      <AppContainer>
        <Fade in={true}>
          <ProductPanel>
            <Container fluid>
              <Row>
                <Col md={3}>
                  <Case />
                </Col>
                <Col md={9}>
                  <Monitor />
                </Col>
              </Row>
            </Container>
          </ProductPanel>
        </Fade>
      </AppContainer>
    );
  }
}

export default App;
