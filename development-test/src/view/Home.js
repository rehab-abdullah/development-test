import React ,{Component} from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import logob from '../images/logob.png';
import { Container, Row,Button,ButtonGroup } from 'react-bootstrap';
import * as action from '../action';
import {GiSettingsKnobs} from "react-icons/gi";


(async () => {
  await action.getCoords();
})();

const StateToProps = state =>
  ({
      coords: state.coords,
      suggestion: state.suggestion
  })
  ;


const DispatchToProps = dispatch => ({
  getCoords: () => dispatch(action.getCoords()),
  getSuggest: () => dispatch(action.getSuggest())
});

export const ButStyle = {
  fontFamily: 'Cocon',
  color: '#38888A',
  width: '200px',
  margin: 'auto',
  display: 'block',
  borderRadius:'12px'
}
const logostyle ={
  display: 'flex', 
  justifyContent: 'center',
  paddingTop:'130px',
}


export default connect(
  StateToProps,
  DispatchToProps
)(

class Home extends Component {
  UNSAFE_componentWillMount = async () => {
      await this.props.getCoords();

  }

render(){
    return(
        <div>
          <Container>
            <Row style={logostyle}>
                <img src={logob}  alt="Logo" />
             </Row>
              <Row style={{ paddingTop:'40px' ,justifyContent: 'center'}}>
              <ButtonGroup toggle>
              <Button style={{width:'50',borderRadius:'12px'}} variant="light"><GiSettingsKnobs/></Button>
                <Link to="/Restaurantpage">
                   <Button style={ButStyle} variant="light">اقترح</Button> 
                 </Link>
              </ButtonGroup> 
              </Row>
          </Container> 
         </div>
     )
   }
  }
);