import CanvasJSReact from '../assets/canvasjs.react';
import axios from 'axios';
var React = require('react');
var Component = React.Component;

//var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
class ColumnChartDeceased extends Component {	
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
		var total=0;
		for(var i=0;i<table.length;i++){
			if(table[i].survived===0 && table[i].sex==="male"){
				total++;
				Male++
			}
			if(table[i].survived===0 && table[i].sex==="female"){
				Female++
				total++;
			}
		  }
		const options = {
			animationEnabled: true,
			exportEnabled: false,
			theme: "light1", // "light1", "dark1", "dark2"
			title:{
				text: ""
			},
			data: [{
				type: "pie",
				indexLabel: "{label}: {y}%",		
				startAngle: -90,
				dataPoints: [
					{ y: Male/total*100, label: "Male" },
					{ y: Female/total*100, label: "Female" },
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
 

 
export default ColumnChartDeceased;