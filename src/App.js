import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


export default class App extends Component {
  pageSize = 5
  render() {
    return (
      <div>
        <Router>
          <Navbar/>
          <Routes>
            <Route exact path="/" element={<News key='general' category='general' country='in' pageSize={this.pageSize}/>}></Route>
            <Route exact path="/business" element={<News key='business' category='business' country='in' pageSize={this.pageSize}/>}></Route>
            <Route exact path="/entertainment" element={<News key='entertainment' category='entertainment' country='in' pageSize={this.pageSize}/>}></Route>
            <Route exact path="/general" element={<News key='general' category='general' country='in' pageSize={this.pageSize}/>}></Route>
            <Route exact path="/health" element={<News key='health' category='health' country='in' pageSize={this.pageSize}/>}></Route>
            <Route exact path="/science" element={<News key='science' category='science' country='in' pageSize={this.pageSize}/>}></Route>
            <Route exact path="/sports" element={<News key='sports'category='sports' country='in' pageSize={this.pageSize}/>}></Route>
            <Route exact path="/technology" element={<News key='technology' category='technology' country='in' pageSize={this.pageSize}/>}></Route>
          </Routes>
        </Router>
      </div>
    )
  }
}