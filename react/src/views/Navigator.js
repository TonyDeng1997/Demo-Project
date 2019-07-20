import React, { Component } from 'react';



//reference :http://allenfang.github.io/react-bootstrap-table/example.html#pagination

class Navigator extends Component {
  

  render() {
   
   
    
      return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">Project</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/TestTable">Test Table</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/TrainTable">Train Table</a>
            </li>
            <li className="nav-item">
              <a className="nav-link"  href="/GenderTable">GenderTable</a>
            </li>
          </ul>
        </div>
      </nav>
      );
    }
  
}

export default Navigator;
