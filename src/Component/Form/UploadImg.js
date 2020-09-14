import React from 'react';

import { StyledDropZone } from 'react-drop-zone'
import 'react-drop-zone/dist/styles.css'

class UploadImg extends React.Component {
  state = {
    file: undefined,
  }

  setFile = (file) => {
    this.setState({ file })
  }

  render() {
    const label = this.state.file? this.state.file.name : 'Click or drop your file here';
    return (
      <div>
        <StyledDropZone onDrop={this.setFile}>{label}</StyledDropZone>
      </div>
    );
  }
}

export default UploadImg