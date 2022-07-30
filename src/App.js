import './App.css';
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar';
import News from './components/News';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      Mode: 'light',
      btnText: 'OFF',
      headline: 'dark'
    };
  }
  
  toggleMode = ()=>{
    if(this.state.Mode === 'light'){
      this.setState({ Mode: 'dark' });
      this.setState({ btnText: 'ON' });
      this.setState({ headline: 'primary' });
      document.body.style.backgroundColor = '#042743';
      document.body.style.color = 'white';
    }
    else{
      this.setState({ Mode: 'light' });
      this.setState({ btnText: 'OFF' });
      this.setState({ headline: 'dark' });
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }
  }

  render() {
    return (
      <Router>
        <Navbar mode={this.state.Mode} toggleMode={this.toggleMode} btnText={this.state.btnText}/>
        <Routes>
          <Route exact path="/"  element={<News key="general" category='general' heading='Newsify' mode={this.state.Mode} headline={this.state.headline}/>}/>
          <Route exact path="/business"  element={<News key="business" category='business' heading='Business' mode={this.state.Mode} headline={this.state.headline}/>}/>
          <Route exact path="/entertainment"  element={<News key="entertainment" category='entertainment' heading='Entertainment' mode={this.state.Mode} headline={this.state.headline}/>}/>
          <Route exact path="/health"  element={<News key="health" category='health' heading='Health' mode={this.state.Mode} headline={this.state.headline}/>}/>
          <Route exact path="/sports"  element={<News key="sports" category='sports' heading='Sports' mode={this.state.Mode} headline={this.state.headline}/>}/>
          <Route exact path="/science"  element={<News key="science" category='science' heading='Science' mode={this.state.Mode} headline={this.state.headline}/>}/>
          <Route exact path="/technology"  element={<News key="technology" category='technology' heading='Technology' mode={this.state.Mode} headline={this.state.headline}/>}/>
        </Routes>
      </Router>
    )
  }
}