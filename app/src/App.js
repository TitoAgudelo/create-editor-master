import React, { Component } from 'react';
import Canvas from './canvas/canvas';
import Images from './images/images';
import Upload from './upload/upload';
import Text from './text/text';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="sidepane col-sm-4 col-md-4 col-lg-3">
          <Upload />
          <div className="assets">
            <h3>Assets</h3>
            <Text />
            <Images />
          </div>
        </div>
        <Canvas />
      </div>
    );
  }
}

export default App;
