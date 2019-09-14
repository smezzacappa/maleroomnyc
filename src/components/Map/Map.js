import React, {Component} from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import './Map.css';
require('dotenv').config();


export class MapContainer extends Component {
    
    state = {
        showingInfoWindow: false,  //Hides or the shows the infoWindow
        activeMarker: {},          //Shows the active marker upon click
        selectedPlace: {}          //Shows the infoWindow to the selected place upon a marker
      };

      onMarkerClick = (props, marker, e) =>
      this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true,
        position:{ lat: 40.7084, 
          lng: -73.9383}
      });
  
    onClose = props => {
      if (this.state.showingInfoWindow) {
        this.setState({
          showingInfoWindow: false,
          activeMarker: null
        });
      }
    };

  
    
render() {

    return (
        
        <Map
          google={this.props.google}
          zoom={18}
          initialCenter={{ lat: 40.7084, lng: -73.9383}}
        >
             <Marker  onClick={this.onMarkerClick}
          name={'3 Dollar Bill {260 Meserole St, Brooklyn, NY 11206}'}/>
          
          <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
             </Map>
           
    );
  }
}
  export default GoogleApiWrapper({
    apiKey: process.env.GOOGLE_MAPS_API_KEY,
  })(MapContainer);