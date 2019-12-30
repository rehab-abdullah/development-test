import { combineReducers } from 'redux';
import Suggest from './Suggest';
import Coords from './Coords';

const rootReducer = combineReducers({
	coords: Coords,
	suggestion: Suggest,
});

export default rootReducer;
