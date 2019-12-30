import { SUGGESTION } from './Instanc';


export default (state = {}, action) => {
    switch (action.type) {
        case SUGGESTION:
            return action.payload

        default:
            return state;
    }
};