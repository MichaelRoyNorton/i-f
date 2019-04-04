import React, { Component } from 'react';
import "./assets/styles/App.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './components/Header';
import EditGreetingCard from './components/EditGreetingCard';
import GreetingCard from './components/GreetingCard';
import Combinations from './components/Combinations';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      combinations: [],
      occasions: [
        {value: 'birthday', label: 'Birthday'},
        {value: 'anniversary', label: 'Anniversary'},
        {value: 'wedding', label: 'Wedding'}
      ],
      selectedOccasion: undefined
    }

    this.saveCombination = this.saveCombination.bind(this)
    this.handleCreate = this.handleCreate.bind(this)
    this.handleOccasionChange = this.handleOccasionChange.bind(this)
    this.resetValue = this.resetValue.bind(this)
  }

  saveCombination(message, label) {
    this.setState({
      combinations: [
        ...this.state.combinations,
        {message, label}
      ]
    })
  }


  handleCreate (e) {
    this.setState({
      occasions: [
        ...this.state.occasions,
        {value: e.toLowerCase().replace(/\W/g, ''), label: e}
      ],
      selectedOccasion: {value: e.toLowerCase().replace(/\W/g, ''), label: e},
    })
  }

  handleOccasionChange(e) {
    this.setState({
      selectedOccasion: e
    })
  }

  resetValue() {
    this.setState({
      selectedOccasion: undefined
    })
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path='/' render={() => <EditGreetingCard occasions={this.state.occasions} selectedOccasion={this.state.selectedOccasion} handleCreate={this.handleCreate} handleOccasionChange={this.handleOccasionChange} resetValue={this.resetValue}/>} />
          <Route path='/greeting-card' render={(props) => <GreetingCard {...props} save={this.saveCombination}/>} />
          <Route path='/combinations' render={() => <Combinations combinations={this.state.combinations}/>} />
        </div>
      </Router>
    );
  }
}

export default App;
