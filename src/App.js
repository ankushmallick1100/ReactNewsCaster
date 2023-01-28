import './App.css';

import React, { Component } from 'react'

export default class App extends Component {
  a = 'Ankush'
  render() {
    return (
      <div>App {this.a}</div>
    )
  }
}