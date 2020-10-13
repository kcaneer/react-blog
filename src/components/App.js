import React from 'react';
import Header from './Header'

class App extends React.Component {

  constructor() {
    super();
    this.pages = ['Home', 'About Me', 'Blog', 'Images', 'Links'];
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
      </div>
    );
  }
}


export default App;
