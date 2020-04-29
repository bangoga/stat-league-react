import React, { Component } from 'react';

// Note to self, component naming is case sensitive

class Navbar extends Component {
  render() {
    return(
    <nav className="simp">
    <div className="container">
      <div className="row">
        <div className="col-md-2"><div className="middle-nav"><h5>StatLeague</h5></div></div>
        <div className="col-md-8">
          <div className="middle-nav">
            <ul>
              <li className="active"><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Api Reference</a></li>
            </ul>
          </div>
        </div>
        <div className="col-md-2"></div>
      </div>
      </div>
  </nav>);
  }
}

export default Navbar;