
var GoogleMap = require('google-map-react');
var React = require("react");
var ReactDom = require("react-dom");
const lat = window.mapLocation.lat;
const lng = window.mapLocation.lng;
class MYMap extends React.Component {
	render() {

		return (
	<GoogleMap
	  center={[lat,lng]}
	  zoom={15}>
  	</GoogleMap>)
	}
}
var container = document.getElementById("app");
ReactDom.render(<MYMap />, container);
