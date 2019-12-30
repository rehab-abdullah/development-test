import { COORDS } from './Instanc';


export default (state = {}, action) => {
    switch (action.type) {
        case COORDS:
            return action.payload;
        default:
            return state;
    }
};
