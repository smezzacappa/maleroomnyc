import React, {Component} from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import './Map.css'

export class MapContainer extends Component {

    
render() {

    return (
        <div className="container" id="Map">
        <Map
          google={this.props.google}
          zoom={18}
          initialCenter={{ lat: 40.7084, lng: -73.9383}}
        >
             <Marker position={{ lat: 40.7084, lng: -73.9383}} />
             </Map>
             </div>
    );
  }
}
  export default GoogleApiWrapper({
    apiKey: 'AIzaSyDXcgW7UOSSEMMj7jTCTeznp6qq98LeZus'
  })(MapContainer);