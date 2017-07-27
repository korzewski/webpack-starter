import React, {Component} from 'react';
import {render} from 'react-dom';
import {HashRouter, Route, Link} from 'react-router-dom';
import './index.html';
import './app.scss';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <ul>
            <li><Link to="/">Homepage</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
          
          <Route exact path="/" component={Homepage} />
          <Route path="/about" component={AboutPage} />
        </div>
      </HashRouter>
    );
  }
}

class Homepage extends Component {
  render() {
    return <div>Homepage!</div>;
  }
}

class AboutPage extends Component {
  render() {
    return <div>AboutPage!</div>;
  }
}

render(<App />, document.getElementById('app'));
