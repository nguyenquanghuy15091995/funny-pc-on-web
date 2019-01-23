import React, { Component } from 'react';
import styled from 'styled-components';

import SaveIcon from 'icons/Save';

const TextEditorContainer = styled.div`
  background-color: #ccc;
  height: 100%;
  padding: 10px;
`;

const TextContent = styled.textarea`
  width: 100%;
  height: 87%;
  border: none;
  resize: none;
  outline: none !important;
  border-radius: 5px;
  padding: 10px;
`;

const ControlContainer = styled.div`
  display: flex;
  align-items: center;
`;

const TextFileNameContainer = styled.div`
  margin: 5px 10px;
  display: inline-block;
`;

const TextFileName = styled.input`
  margin-left: 5px;
  padding: 0px 5px;
  border: 1px solid #888;
  outline: none !important;
`;

const SaveButton = styled.button`
  outline: none !important;
  background-color: #e91e63;
  border-radius: 3px;
  border: none;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 4px;
  cursor: pointer;
  &:hover {
    background-color: #ec407a;
  }
`;

class TextEditor extends Component {
  state = {
    areaValue: '',
    fileName: 'new',
  }

  handleTextArea = (e) => {
    this.setState({
      areaValue: e.target.value,
    });
  }

  handleFileName = (e) => {
    this.setState({
      fileName: e.target.value,
    });
  }

  handleSaveButton = () => {
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(this.state.areaValue));
    element.setAttribute('download', `${this.state.fileName}.txt`);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  }

  render() {
    return (
      <TextEditorContainer>
        <TextContent value={this.state.areaValue} onChange={this.handleTextArea} />
        <ControlContainer>
          <TextFileNameContainer>
            Filename: <TextFileName type="text" value={this.state.fileName} onChange={this.handleFileName} />
          </TextFileNameContainer>
          <SaveButton onClick={this.handleSaveButton}>
            <SaveIcon color="#FFF" size={15} />
          </SaveButton>
        </ControlContainer>
      </TextEditorContainer>
    );
  }
}

export default TextEditor;
