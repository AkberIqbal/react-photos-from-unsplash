cimport React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import PhotoSearch from './app/photoSearch';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'M Akber Iqbal'
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <PhotoSearch />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
