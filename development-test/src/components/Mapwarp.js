import React, { Component } from 'react'
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import { Button } from 'react-bootstrap';

import Header from './Header';
import Restaurantcard from '../components/Restaurantcard';



const style = {
    width: '100%',
    height: '100%',
    zIndex: '1'
}

const suggestButton = {
    position: 'absolute',
    bottom: '70px',
    zIndex: 3,
    width: '100%',
    textAlign: 'center'
}

export class Mapwarp extends Component {
    getSuggest = async () => {
        await this.props.getSuggest(this.props.coords);

    }

    UNSAFE_componentWillMount = () => {
        this.getSuggest();
    }

    render() {
        return (
            <div>
                <Header />
                {this.props.suggestion.data ? (
                    <Restaurantcard
                        name={this.props.suggestion.data.name}
                        rate={this.props.suggestion.data.rating}
                        cat={this.props.suggestion.data.cat}
                        lat={this.props.suggestion.data.lat}
                        lon={this.props.suggestion.data.lon}
                    />
                ) : (<span></span>)
                }
                {this.props.suggestion.data ? (
                    <div style={suggestButton}>
                        <Button onClick={this.getSuggest} variant='dark'>اقتراح آخر</Button>
                    </div>
                ) : ''}

                {this.props.suggestion.data ? (
                    <Map
                        style={style}
                        initialCenter={{
                            lat: this.props.suggestion.data.lat,
                            lng: this.props.suggestion.data.lon
                        }}
                        center={{
                            lat: this.props.suggestion.data.lat,
                            lng: this.props.suggestion.data.lon
                        }}
                        google={this.props.google} zoom={14}>
                        <Marker
                            title={this.props.suggestion.data.name}
                            name={' '}
                            position={{ lat: this.props.suggestion.data.lat, lng: this.props.suggestion.data.lon }} />
                    </Map>
                ) : (
                        ''
                )}


            </div>

        );
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyAAMkTg8XnW6iMGYnr1_CsEZAo41VLMPLM')
})(Mapwarp);