import React, { Component } from 'react';



//reference :http://allenfang.github.io/react-bootstrap-table/example.html#pagination

class DashTable extends Component {
  

  render() {
   
   
    
      return (
        <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Test Table</th>
      <th scope="col">Train Table</th>
      <th scope="col">Gender Table</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Number of records</th>
      <td>{this.props.testTable.length}</td>
      <td>{this.props.trainTable.length}</td>
      <td>{this.props.genderTable.length}</td>
    </tr>
  </tbody>
</table>
      );
    }
  
}

export default DashTable;
