import React, { Component } from 'react';
import axios from 'axios';
import Train from './views/Train'
import { BrowserRouter as Router, Route} from "react-router-dom";
import Test from './views/Test'
import Navigator from './views/Navigator'
import Charts from './views/PieCharts'
import ColumnChart from './views/ColumnCharts'
import  GenderSubmission from './views/GenderSubmission'
import ColumnChartDeceased from './views/ColumnChartsDeceased';

const url=" http://192.168.0.17:8080/"


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      table: [],
      isLoaded:false,
      error:""
    };
  }

  componentDidMount() {
    axios.get(url)
    .then(res => this.setState({ table: res.data,isLoaded:true }))
  }

  render() {
    return (
        
      <div>
  
      <Router>
      <Navigator/>
  
    


  <Route exact path="/" render={() => <Charts url={url}/>}/>
  <Route exact path="/" render={() => <ColumnChart url={url}/>}/>
  <Route exact path="/" render={() => <ColumnChartDeceased url={url}/>}/>
  <Route exact path="/GenderTable" render={() => <GenderSubmission url={url}/>}/>
  <Route exact path="/TrainTable"  render={() => <Train url={url}/>}/>
  <Route exact strict path="/TestTable"  render={() => <Test url={url}/>}/>


      </Router>

  </div>
    );
  }
}

export default App;
