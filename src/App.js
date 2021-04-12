// eslint-disable-next-line
import { useState, useEffect, useReducer } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Create from "./Components/Create";
import { Edit } from "./Components/Edit/Edit.js";
import List from "./Components/List";
import Header from "./Components/Header";
import "./App.css";
// eslint-disable-next-line
import { todoReducer } from "./reducers/todo";
import { ADD_WORK, DELETE_WORK, EDIT_WORK, UPDATE_WORK } from "./reducers/todo";

function App() {
  //const [activities, setActivities] = useState([]);

  const [editMode, setEditMode] = useState(false);
  const [textEdit, setTextEdit] = useState("");

  const [todos, dispatch] = useReducer(todoReducer, []);

  //con useState
  // const addActivity = (activity) =>{
  //   //setActivities([...activities, activity]);

  // }

  //con useReducer
  const addActivity = (activity) => {
    dispatch({ type: ADD_WORK, payload: activity });
  };

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
  const deleteActivity = (id) => {
    const newActivities = todos.filter((activity) => activity.id !== id);
    dispatch({ type: DELETE_WORK, payload: newActivities });
  };

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

  //con useReducer  EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE
  const editActivity = (id) => {
    //selecciona la que voy a editar

    console.log("la tarea en editActivity app?", id);
    const change = todos.filter((activity) => activity.id === id);
    
    const newActivities = todos.filter((activity) => activity.id !== id);
    setEditMode(true);
    const  work  = change[0].work;
    setTextEdit(work);
    
    
    dispatch({
      type: EDIT_WORK,
      payload: [
        ...newActivities,
        {
          id: id,
          work: change[0].work,
          state: change[0].state,
          editMode: change[0].editMode,
        },
      ],
    });
  };

  //con useReducer
  const changeActivity = (id) => {
    const change = todos.filter((activity) => activity.id === id);
    const newActivities = todos.filter((activity) => activity.id !== id);
    dispatch({
      type: UPDATE_WORK,
      payload: [
        ...newActivities,
        {
          id: id,
          work: change[0].work,
          state: !change[0].state,
          editMode: change[0].editMode,
        },
      ],
    });
  };

  return (
    <Container className="container">
      <Header title={"Task List App"} />
      <Row className="justify-content-center">
        {!editMode ? (
          <Col md={4} variant="primary">
            <Create addActivity={addActivity} />
          </Col>
        ) : (
          <Col md={4} variant="primary">
            <Edit editActivity={editActivity} textEdit={textEdit} />
          </Col>
        )}

        <Col md={8} className="mt-3">
          {/* <List activities = {activities} deleteActivity={deleteActivity} changeActivity={changeActivity}   /> */}
          <List
            activities={todos}
            deleteActivity={deleteActivity}
            editActivity={editActivity}
            textEdit={textEdit}
            changeActivity={changeActivity}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
