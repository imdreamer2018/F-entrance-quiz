import React, { Component } from 'react';
import './App.scss';
import Students from './components/Students/Students';

class App extends Component {
  render() {
    return (
      <div data-testid="app" className="App">
        {/*// TODO feedback: Students没太有必要，感觉起到wrapper的作用，但其实功能可以在App组件中*/}
        <Students/>
      </div>
    );
  }
}

export default App;
