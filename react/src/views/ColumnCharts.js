import CanvasJSReact from '../assets/canvasjs.react';
import axios from 'axios';
var React = require('react');
var Component = React.Component;

//var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
class ColumnChart extends Component {	
	constructor(props) {
		super(props);
		this.state = {
		  table: [],                                                         //data table
		  isLoaded:false,                                                    //wait until loaded
		  url:this.props.url
		};
		
	  }


	componentDidMount() {
    
		axios.get(this.state.url+"getTrainTable")
		.then(res => this.setState({ table: res.data,isLoaded:true}))
	
	}

	render() {
		const {table } = this.state;
		var Male = 0;
		var Female=0;
		for(var i=0;i<table.length;i++){
			if(table[i].survived===0 && table[i].sex==="male"){
			  Male++
			}
			if(table[i].survived===0 && table[i].sex==="female"){
			  Female++
			}
		  }

		const options = {
			animationEnabled: true,
			theme: "light1",
			title: {
				text: "Deceased Comparison"
			},
			axisY: {
			title: "Number of Deceased",
				scaleBreaks: {
					autoCalculate: true,
			  type: "wavy",
			  lineColor: "white"
				}
			},
			data: [{
				type: "column",
				indexLabel: "{y}",		
				indexLabelFontColor: "white",
				dataPoints: [
					{"label":"Male","y":Male},
					{"label":"Female","y":Female},
				]
			}]
		}
		
		return (
		<div>
			<CanvasJSChart options = {options} 
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}
 

 
export default ColumnChart;