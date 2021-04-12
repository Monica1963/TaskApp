import React from "react";
import { Button, Form } from "react-bootstrap";
import { useState } from "react";

export const Edit = ({ editActivity, textEdit }) => {
  //   const initialState = {
  //     id: "",
  //     work: "",
  //     fecha: new Date(),
  //     state: false,
  //     editMode: false,
  //   };
  // const { work } = change;
  console.log("SLFAGÑA", textEdit);

  const handlerWork = (e) => {
    // console.log(e);
    // const { name, value } = e.target;
    // setWork({ ...work, [name]: value });
  };

  //   const [work, setWork] = useState(editActivity);

  const handleSubmit = (e) => {
    e.preventDefault();

    //     const { work: task } = work;
    //     if (task.trim() === "") return;
    //     const workObject = {
    //       ...work,
    //       id: shortid(),
    //     };

    //     setWork(initialState);
    //     addActivity(workObject); //se reemplaza por el dispactch
  };

  return (
    <>
      <h3>Editar tarea</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Control
            placeholder="work"
            type="text"
            name="work"
            value={textEdit}
            onChange={handlerWork}
          />
        </Form.Group>
        <Button variant="warning" type="submit" block>
          Guardar
        </Button>
      </Form>
    </>
  );
};
