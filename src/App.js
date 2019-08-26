import React, { Component } from 'react';
import './App.css';

import Display from './components/Display/Display'
import KeyPadGrid from './components/KeyPadGrid/KeyPadGrid'

class App extends Component {
  
  state = {
    currentSound: null
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  setCurrentSound = soundName => { this.setState({ currentSound: soundName }) }

  handleKeyPress = e => {
    e.preventDefault()
    let label = ''

    switch(e.key.toUpperCase()) {
      case ('Q'):
        label = "aSharp3"
        break
      case ('W'):
        label = "fSharp3"
        break
      case ('E'):
        label = "fSharp4"
        break
      case ('A'):
        label = "fSharp5"
        break
      case ('S'):
        label = "g55"
        break
      case ('D'):
        label = "g3"
        break
      case ('Z'):
        label = "g4"
        break
      case ('X'):
        label = "gSharp4"
        break
      case ('C'):
        label = "gSharp5"
        break
      default: return 'Key Not Found!' // If we get here error!
    }

    this.setState({ currentSound: label })
    const sound = document.getElementById(e.key.toUpperCase())

    if (sound) {
      sound.play()
    }
  }

  render () {
    return (
      <div className="App" id = "drum-machine">
        <Display output = { this.state.currentSound } />
        <KeyPadGrid setDisplay = { this.setCurrentSound }  />
      </div>
    )
  }
}

export default App;
