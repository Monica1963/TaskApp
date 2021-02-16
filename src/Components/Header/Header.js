import  { memo } from 'react';
import {Row, Col} from "react-bootstrap";


const Header = memo( ( {title} ) => {
    return ( 
        <Row className="p-1 bg-dark text-white">
            <Col> 
                <h1 className="text-center"> {title} </h1>
            </Col>
        </Row>

     );
});
    
export default Header;
