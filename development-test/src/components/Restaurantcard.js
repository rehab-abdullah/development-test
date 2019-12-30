import React from "react";
import { Row, Container } from 'react-bootstrap';
import { FaHeart } from "react-icons/fa";
import { FiUpload } from "react-icons/fi";
import { FaMapMarkedAlt} from "react-icons/fa";
import { AiFillPicture } from "react-icons/ai";

const style = {
    backgroundColor: '#F0FFFF',
    zIndex: '3',
    width: '100%',
    height: '15%',
    opacity: '0.9',
    padding: '10px',

}



const row = {
    width: '100%'
}

class Restaurantcard extends React.Component{
    

    render() {
      
        return(
            <div style={style}>
            <Container>
                <Row style={row} style={{display: 'flex', justifyContent: 'center'}}>
                   <p>{this.props.name}</p> 
                </Row>
                <Row style={{display: 'flex', justifyContent: 'center'}} lg={{ span: 8, offset: 2 }}>
                    <p>{this.props.rate}/10 - {this.props.cat}</p>
                </Row>
                 
                <Row style={{display: 'flex', justifyContent: 'center'}} >
                     <FaHeart style={{ marginLeft: '10px'}}/>
                     <AiFillPicture style={{ marginLeft: '10px'}}/>
                     <FiUpload style={{ marginLeft: '10px'}}/>
                     <FaMapMarkedAlt style={{ marginLeft: '10px'}}/>
                </Row>
            </Container>
            </div>
        );
    }
}
export default Restaurantcard;