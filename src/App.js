import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import React, {Component} from 'react';
import Navigation from './components/navigation.js';
import Home from './components/home';



<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
  crossorigin="anonymous"
/>

class App extends Component {

  render() {
    return (
      <Router>
        <div className='App'>
          <Navigation/>
          <Home/>
        </div>
      </Router>

    );
  }
}
export default App;
