import React, {Component} from 'react';
import {render} from 'react-dom';
import './index.html';
import './app.scss';

class HelloMessage extends Component {
  render() {
    return <div>{this.props.message}</div>;
  }
}

render(<HelloMessage message="webpack starter!" />, document.getElementById('app'));
