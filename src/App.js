import { useState, useEffect, useReducer } from "react";
import {Container, Row, Col} from "react-bootstrap";
import Create from "./Components/Create";
import List from './Components/List';
import Header from './Components/Header';
import './App.css';
import { todoReducer, initialState } from "./reducers/todo";
import { ADD_WORK, DELETE_WORK, UPDATE_WORK } from './reducers/todo';


function App() {
  
  //const [activities, setActivities] = useState([]);

  const [todos, dispatch] = useReducer (todoReducer, []); 

  //con useState
  // const addActivity = (activity) =>{
  //   //setActivities([...activities, activity]); 
  
  // }

  //con useReducer
  const addActivity = (activity) =>{
    
    dispatch({type: ADD_WORK, payload: activity });
    
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

  //con useState
  // const deleteActivity = id =>{
  //   const newActivities = activities.filter((activity) => activity.id !== id);
  //     setActivities(newActivities);
    
  // }

  //con useReducer
  const deleteActivity = id =>{
     const newActivities = todos.filter((activity) => activity.id !== id);
     dispatch({type: DELETE_WORK, payload: newActivities });
      
    }

  //con useState
  //const changeActivity = (id, state) => {
    // const change = activities.filter((activity) => activity.id === id);
    // // if (change[0].state===false){
    // //   const newActivities = activities.filter((activity) => activity.id !== id);
  
    // //   setActivities([...newActivities, {id: id, work: change[0].work, state: true}]);
    // // }else{
    // //   const newActivities = activities.filter((activity) => activity.id !== id);
  
    // //   setActivities([...newActivities, {id: id, work: change[0].work, state: false}]);
    // // }
    // const newActivities = activities.filter((activity) => activity.id !== id);
    // setActivities([...newActivities, {id: id, work: change[0].work, state: !change[0].state}]);

   // }
  
    //con useReducer
    const changeActivity = (id) => {
      const change = todos.filter((activity) => activity.id === id);
      const newActivities = todos.filter((activity) => activity.id !== id);
      dispatch({type: UPDATE_WORK, payload: [...newActivities, {id: id, work: change[0].work, state: !change[0].state}] });
  
      }

  return (
    <Container className="container">
       <Header title={"Task List App"} />
          <Row className="justify-content-center">
            <Col md={10} variant="primary"  >
              <Create addActivity={addActivity} />
            
            </Col>

            <Col md={8} className="mt-3">
              {/* <List activities = {activities} deleteActivity={deleteActivity} changeActivity={changeActivity}   /> */}
              <List activities = {todos} deleteActivity={deleteActivity} changeActivity={changeActivity}   />
            </Col>
           
            
          </Row>

    </Container>
  );
}

export default App;
