import React, { PureComponent } from 'react';

import {
  SpeakerContainer,
  SpeakerCase,
  SpeakerController,
} from '../../components/SpeakerView';

class Speaker extends PureComponent {
  render() {
    return (
      <SpeakerContainer>
        <SpeakerCase>

        </SpeakerCase>
        <SpeakerController>

        </SpeakerController>
        <SpeakerCase>

        </SpeakerCase>
      </SpeakerContainer>
    );
  }
}

export default Speaker;
