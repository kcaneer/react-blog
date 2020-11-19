import 'bootstrap'
import React from 'react'
import Header from './Header'
import Carousel from './Carousel'
import Accordion from './Accordion'
import Blog from './Blog'
import Projects from './Projects'
import Footer from './Footer'
import {BrowserRouter as Router, Link} from 'react-router-dom'

class App extends React.Component {

  constructor() {
    super();
    
  }

  render() {
    return (
      <div className="App container">
        <Router>
          <Header />
          <Carousel />
          <Accordion />
          <Projects />
          <Blog />
          <Footer />
        </Router>
      </div>
    );
  }
}


export default App;
