import { useState, useEffect, useReducer } from "react";
import {Container, Row, Col} from "react-bootstrap";
import Create from "./Components/Create";
import List from './Components/List';
import Header from './Components/Header';
import './App.css';
import { todoReducer } from "./reducers/todo";

function App() {
  //activities:[{}]
  const [activities, setActivities] = useState([]);

  const [state, dispatch] = useReducer (todoReducer, initialState); 

  const addActivity = (activity) =>{
    setActivities([...activities, activity]); //error
  }

  // useEffect (() =>{
  //   let data = localStorage.getItem("work");
  //   if(data != null){
  //     console.log( data);
  //   }else {
  //     addActivity({
  //       id: "100", work: "dfaga", state: false},
  //     )
  //   }
  // })

  const deleteActivity = id =>{
    const newActivities = activities.filter((activity) => activity.id !== id);
      setActivities(newActivities);
    
  }

  const changeActivity = (id, state) => {
    const change = activities.filter((activity) => activity.id === id);
    // if (change[0].state===false){
    //   const newActivities = activities.filter((activity) => activity.id !== id);
  
    //   setActivities([...newActivities, {id: id, work: change[0].work, state: true}]);
    // }else{
    //   const newActivities = activities.filter((activity) => activity.id !== id);
  
    //   setActivities([...newActivities, {id: id, work: change[0].work, state: false}]);
    // }
    const newActivities = activities.filter((activity) => activity.id !== id);
    setActivities([...newActivities, {id: id, work: change[0].work, state: !change[0].state}]);

    }
  
  

  return (
    <Container className="container">
       <Header title={"Task List App"} />
          <Row className="justify-content-center">
            <Col md={10} variant="primary"  >
              <Create addActivity={addActivity} />
            
            </Col>

            <Col md={8} className="mt-3">
              <List activities = {activities} deleteActivity={deleteActivity} changeActivity={changeActivity}   />
            
            </Col>
           
            
          </Row>

    </Container>
  );
}

export default App;
