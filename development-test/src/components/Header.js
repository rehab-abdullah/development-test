import React from "react";
import { Container, Row } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import logoh from '../images/logoh.png';

const style= {
    zIndex: '3',
    backgroundColor: '#2f6063',
    width: '100%',
    height: '10%',
    opacity: '0.9',
    padding: '10px',

};

 class Header extends React.Component{
   render(){
         return (
            
          <div style={style}>
            <Container>
              <Row >
                <Col style={{display: 'flex', justifyContent: 'center'}}><img src={logoh} alt="Logo" /> </Col>
               </Row> 
            </Container>
          </div>            

        );
   }  
 }
 export default Header;