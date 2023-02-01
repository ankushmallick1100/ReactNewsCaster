import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'



export default class App extends Component {
  pageSize = 6

  state ={
    progress: 0
  }

  setProgress = (progress)=>{
    this.setState({progress:progress})
  };

  render() {
    return (
      <div>
        <Router>
          <Navbar/>
          <LoadingBar
        height={3}
        color='#f11946'
        progress={this.state.progress}
      />
          <Routes>
            <Route exact path="/" element={<News setProgress={this.setProgress} key='general' category='general' country='in' pageSize={this.pageSize}/>}></Route>
            <Route exact path="/business" element={<News setProgress={this.setProgress} key='business' category='business' country='in' pageSize={this.pageSize}/>}></Route>
            <Route exact path="/entertainment" element={<News setProgress={this.setProgress} key='entertainment' category='entertainment' country='in' pageSize={this.pageSize}/>}></Route>
            <Route exact path="/general" element={<News setProgress={this.setProgress} key='general' category='general' country='in' pageSize={this.pageSize}/>}></Route>
            <Route exact path="/health" element={<News setProgress={this.setProgress} key='health' category='health' country='in' pageSize={this.pageSize}/>}></Route>
            <Route exact path="/science" element={<News setProgress={this.setProgress} key='science' category='science' country='in' pageSize={this.pageSize}/>}></Route>
            <Route exact path="/sports" element={<News setProgress={this.setProgress} key='sports'category='sports' country='in' pageSize={this.pageSize}/>}></Route>
            <Route exact path="/technology" element={<News setProgress={this.setProgress} key='technology' category='technology' country='in' pageSize={this.pageSize}/>}></Route>
          </Routes>
        </Router>
      </div>
    )
  }
}