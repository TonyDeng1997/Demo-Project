import React, { Component } from 'react';
import axios from 'axios';
var ReactBsTable  = require('react-bootstrap-table');
var BootstrapTable = ReactBsTable.BootstrapTable;
var TableHeaderColumn = ReactBsTable.TableHeaderColumn;


//reference :http://allenfang.github.io/react-bootstrap-table/example.html#pagination

class Train extends Component {

  constructor(props) {
    super(props);
    this.state = {
      table: [],                                                         //data table
      isLoaded:false,                                                    //wait until loaded
      url:this.props.url
    };
    /* Link functions so that state and props are accesible */
    this.onAfterSaveCell=this.onAfterSaveCell.bind(this);
    this.onBeforeSaveCell=this.onBeforeSaveCell.bind(this);
    this.onAfterInsertRow=this.onAfterInsertRow.bind(this);
    this.onAfterDeleteRow=this.onAfterDeleteRow.bind(this);


  }

   /* A hook function to process after a cell is saved
      Inputs: row, A object contains the row
              cellName, the cellName being modified
              cellValue, the value it has been changed to
   */
  onAfterSaveCell(row, cellName, cellValue) {

    axios.post(this.state.url+"/updateTrainEntry",row).then(
      alert(`Save cell ${cellName} with value ${cellValue}`)
    )
  }
  
   /* A hook function to process before a cell is saved
      Can do anything like verification, not done here.
      Inputs: row, A object contains the row
              cellName, the cellName being modified
              cellValue, the value it has been changed to
   */
  onBeforeSaveCell(row, cellName, cellValue) {
    if (window.confirm('Are you sure you wish to modify this field?'))
      return true
    else{
      return false
    }
  }

  /*A hook function to process after Row is inserted
      Inputs: row, A object contains the row
  */
  onAfterInsertRow(row) {
    axios.post(this.state.url+"saveTrainEntry",row).then(
      alert('The new row id is:\n ' + row.passengerId)
    )
  }

  /*A hook function to process after Row is deleted
      Inputs: rowKeys, The keys of rows that are being deleted
  */
  onAfterDeleteRow(rowKeys) {
    for(var i in rowKeys){
      console.log(i)
      axios.delete(this.state.url+"TrainTable/"+rowKeys[i]).then(
      )
    }
    alert('The rowkey you drop: ' + rowKeys)
  }
  
 
  //Load the data after component is mounted
  componentDidMount() {
    
    axios.get(this.state.url+"getTrainTable")
    .then(res => this.setState({ table: res.data,isLoaded:true}))

  }

  render() {
    const options = {
      afterInsertRow: this.onAfterInsertRow,   // A hook for after insert rows
      afterDeleteRow: this.onAfterDeleteRow          // A hook for after delete row
    };
    const selectRowProp = {
      mode: 'checkbox'
    };

    const cellEditProp = {
      mode: 'click',
      blurToSave: true,
      beforeSaveCell: this.onBeforeSaveCell, // a hook for before saving cell
      afterSaveCell: this.onAfterSaveCell  // a hook for after saving cell
    };

    const {isLoaded, table } = this.state;
   
   
    //Load the data might take a while
    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {     
    //Change the name for embakred field for better understanding 
      for(var i=0;i<table.length;i++){
        if(table[i].embarked==='S'){
          table[i].embarked="Southampton"
        }
        else if(table[i].embarked==='C'){
          table[i].embarked="Cherbourg"
        }
        else if(table[i].embarked==='Q'){
          table[i].embarked="Queenstown"
        }
      }
      return (
        <div>
        <h1 style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>Train Table</h1>

        <BootstrapTable data={table} version='4'  hover cellEdit={ cellEditProp } pagination  search insertRow={ true }  selectRow={ selectRowProp }  exportCSV={ true } deleteRow={ true } options={ options }>
            <TableHeaderColumn isKey dataField='passengerId' width="140">PassengerId</TableHeaderColumn>
            <TableHeaderColumn dataField='name' tdStyle={ { whiteSpace: 'normal' } }>Name</TableHeaderColumn>
            <TableHeaderColumn dataField='age'>Age</TableHeaderColumn>
            <TableHeaderColumn dataField='sex'>Sex</TableHeaderColumn>
            <TableHeaderColumn dataField='pclass'>Pclass</TableHeaderColumn>
            <TableHeaderColumn dataField='survived'  width="100">Survived</TableHeaderColumn>
            <TableHeaderColumn dataField='sibsp'>Sibsp</TableHeaderColumn>
            <TableHeaderColumn dataField='parch'>Parch</TableHeaderColumn>
            <TableHeaderColumn dataField='ticket'  tdStyle={ { whiteSpace: 'normal' } }>Ticket</TableHeaderColumn>
            <TableHeaderColumn dataField='fare'>Fare</TableHeaderColumn>
            <TableHeaderColumn dataField='embarked' width="140">Embarked</TableHeaderColumn>
            <TableHeaderColumn dataField='cabin' tdStyle={ { whiteSpace: 'normal' } }>Cabin</TableHeaderColumn>
        </BootstrapTable>,
       </div>
      );
    }
  }
}

export default Train;
