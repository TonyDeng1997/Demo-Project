import CanvasJSReact from '../assets/canvasjs.react';
import axios from 'axios';
var React = require('react');
var Component = React.Component;

//var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
class Charts extends Component {	
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
		var Southampton = 0;
		var Cherbourg = 0;
		var Queenstown = 0;
		var total=table.length;
		for(var i=0;i<table.length;i++){
			if(table[i].embarked==='S'){
			  Southampton++
			}
			if(table[i].embarked==='C'){
			  Cherbourg++
			}
			if(table[i].embarked==='Q'){
			  Queenstown++
			}
		  }
		const options = {
			animationEnabled: true,
			exportEnabled: false,
			theme: "light1", // "light1", "dark1", "dark2"
			title:{
				text: "Embarked Location"
			},
			data: [{
				type: "pie",
				indexLabel: "{label}: {y}%",		
				startAngle: -90,
				dataPoints: [
					{ y: Southampton/total*100, label: "Southampton" },
					{ y: Cherbourg/total*100, label: "Cherbourg" },
					{ y: Queenstown/total*100, label: "Queenstown" }
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
 
export default Charts;