import './App.css';
import React,{ useState } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


const App = ()=> {
  const pageSize = 6
  const [progress, setProgress] = useState(0)
    return (
      <div>
        <Router>
          <Navbar/>
          <LoadingBar
        height={3}
        color='#f11946'
        progress={progress}
      />
          <Routes>
            <Route exact path="/" element={<News setProgress={setProgress} key='general' category='general' country='in' pageSize={pageSize}/>}></Route>
            <Route exact path="/business" element={<News setProgress={setProgress} key='business' category='business' country='in' pageSize={pageSize}/>}></Route>
            <Route exact path="/entertainment" element={<News setProgress={setProgress} key='entertainment' category='entertainment' country='in' pageSize={pageSize}/>}></Route>
            <Route exact path="/general" element={<News setProgress={setProgress} key='general' category='general' country='in' pageSize={pageSize}/>}></Route>
            <Route exact path="/health" element={<News setProgress={setProgress} key='health' category='health' country='in' pageSize={pageSize}/>}></Route>
            <Route exact path="/science" element={<News setProgress={setProgress} key='science' category='science' country='in' pageSize={pageSize}/>}></Route>
            <Route exact path="/sports" element={<News setProgress={setProgress} key='sports'category='sports' country='in' pageSize={pageSize}/>}></Route>
            <Route exact path="/technology" element={<News setProgress={setProgress} key='technology' category='technology' country='in' pageSize={pageSize}/>}></Route>
          </Routes>
        </Router>
      </div>
    )
}

export default App;