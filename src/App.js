import React, {Component} from 'react';
import './App.css';
import SampleCardList from './components/SampleCardList'
import Header from './components/Header'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <SampleCardList/>
      </div>
    );
  }
}

export default App;
