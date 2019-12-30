import React, { Component } from 'react'
import { connect } from 'react-redux';

import Mapwarp from '../components/Mapwarp';
import * as action from '../action';

(async () => {
    await action.getCoords();
})();

const StateToProps = state =>
    ({
        coords: state.coords,
        suggestion: state.suggestion 
    });

const DispatchToProps = dispatch => ({
    getCoords: () => dispatch(action.getCoords()),
    getSuggest: (coords) => dispatch(action.getSuggest(coords)),
});

export default connect(StateToProps, DispatchToProps)(
    class Restaurantpage extends Component {
        UNSAFE_componentWillMount = async () => {
            await this.props.getCoords();
        }

        render() {
            return (
               <div>
                    <Mapwarp
                        coords={this.props.coords}
                        suggestion={this.props.suggestion}
                        getSuggest={this.props.getSuggest}
                    />
                </div>
            )
        }
    }
);
