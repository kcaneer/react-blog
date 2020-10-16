import 'bootstrap'
import React from 'react'
import Header from './Header'
import Carousel from './Carousel'
import Accordion from './Accordion'
import Blog from './Blog'
import Projects from './Projects'
import Footer from './Footer'

class App extends React.Component {

  constructor() {
    super();
    this.pages = ['About Me', 'Blog', 'Projects'];
    this.state = {
      currentPage: 0
    }
    this.setPage = this.setPage.bind(this)
  }
  setPage(newPageNum) {
    this.setState({ currentPage: newPageNum })
  }

  render() {
    return (
      <div className="App container">
        <Header
          pages={this.pages}
          currentPage={this.state.currentPage}
          setPage={this.setPage}
        />
        <Carousel/>
        <Accordion/>
        <Blog/>
        <Projects/>
        <Footer/>
      </div>
    );
  }
}


export default App;
