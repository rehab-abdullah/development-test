
import axios from 'axios';



import {SUGGESTION , COORDS} from '../reducers/Instanc';

const url = "https://cors-anywhere.herokuapp.com/";


export const getCoords = () => {
    if (navigator.geolocation) {
        const getPosition = () => {
            return new Promise((res, rej) => {
                const coordinates = {
                    latitude: null,
                    longitude: null,
                    error: false,
                    testData: 'welcom'
                }
                const success = pos => {
                    coordinates.latitude = pos.coords.latitude;
                    coordinates.longitude = pos.coords.longitude;
                    coordinates.testData = 'I am here';
                    res(coordinates);
                }

                const fail = err => {
                    coordinates.error = true;
                    alert('An unknown network error has occurred !!');


                    rej(err); // or reject(error);
                }
                navigator.geolocation.getCurrentPosition(success, fail);
            });
        }
        const coordinatePromise = getPosition();


        return {
            type: COORDS,
            payload: coordinatePromise.then(coords => ({ lat: coords.latitude, lng: coords.longitude }))

        };
    } else {
          alert('Geolocation not supported !!');

        return {
            type: COORDS,
            payload: { lat: undefined, lng: undefined }
        };
    }

}

export const getSuggest = ({ lat, lng }) => {
    console.log(lat, lng)
    return {
        type: SUGGESTION,
        payload: axios.get(`${url}http://wainnakel.com/api/v1/GenerateFS.php?uid=${lat},${lng}&get_param=value`)
    };
}




