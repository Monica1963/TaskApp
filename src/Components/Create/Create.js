import { useState } from "react";
import shortid from "shortid";
import { Button, Form } from "react-bootstrap";
import "./Create.css";

const Create = ({addActivity}) => {
    const initialState = {id: "", work: "", state: false};

    const handlerWork = (e) => {
        const {name, value} = e.target;
        setWork({...work, [name]: value});
       
    };

    const [work, setWork]= useState(initialState);

    const handleSubmit=(e) =>{
        e.preventDefault();
        
        const {work: task} = work;
        if(task.trim() === "") return;
        const workObject = {
            ...work,
            id: shortid(),
        };
        
        setWork(initialState);
        addActivity(workObject);
    };    
    
    return ( 
        <>


        <h3>Crear tarea</h3>
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Control type="text" name="work" value={work.work} onChange={handlerWork} /> 
            </Form.Group>
            <Button variant="primary" type="submit" block>Agregar Tarea</Button>
        </Form>
        

       
 
        </>


     );
}
 
export default Create;