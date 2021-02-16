import { Alert, Row, Col } from "react-bootstrap";

const pointer = {
    cursor : "pointer",
};

//Este componente podria ir dentro de List.js y llamarlo desde dentro tambien
const Item = ({id, work, state, deleteActivity, changeActivity}) => {
    const deleteWork = (e) => {
        const {id} = e.target;
        
        deleteActivity(id);

    };  

    
    const changeWork = (e) => {
        const {id, state } = e.target;
        //id.state = true;

        changeActivity(id, state);



    };


    return (
        // <h4 onDoubleClick={deleteWork} key={id}>
        //     {id} - {work} - {state ? "Cumplido" : "Pendiente"}
        // </h4>

        <Alert key={id} variant={"secondary"}>
            <Row className="justify-content-around">
                <Col md={10}>
                    <input 
                        type="checkbox" 
                        id={id}
                        defaultChecked= {state}
                        onClick={changeWork} 
                    />{work}
                </Col>
                <Col md={1}> 
                <p  style={pointer} className="alert" id={id} onClick={deleteWork}>  &#10006;</p> 
                </Col>
            </Row>
        </Alert>
    );
};


export default Item;