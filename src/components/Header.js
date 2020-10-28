import React from 'react';

function Header() {
  return (
    <div className="container pb-5">
      <nav className="navbar navbar-expand-lg fixed-top bg-secondary">
        <a href="index.html"><h4 className="text-light">Kennedy Caneer</h4></a>
        <button className="navbar-toggler bg-primary text-white" type="button" data-toggle="collapse"
          data-target="#navbarResponsive1" aria-controls="navbarResponsive1" aria-expanded="false"
          aria-label="Toggle navigation">
          <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <div className="navbar-nav ml-auto">
            <a className="nav-item nav-link text-light active" href="#about">
              <h4>About Me</h4>
            </a>
            <a className="nav-item nav-link text-light" href="#blog">
              <h4>Blog</h4>
            </a>
            <a className="nav-item nav-link text-light" href="#portfolio">
              <h4>Portfolio</h4>
            </a>
          </div>
        </div>
      </nav>
    </div >
  )
}

export default Header





  // < ul classNameName = "nav nav-pills" >
  // {
  //   props.pages.map((item, index) => {
  //     return (
  //       <li classNameName="nav-item">
  //         <a
  //           onClick={() => props.setPage(index)}
  //           classNameName={"nav-link " + (props.currentPage === index ? 'active' : '')}>
  //           {item}
  //         </a>
  //       </li>
  //     )
  //   })
  // }
  //   </ul >