import { Alert, Row, Col } from "react-bootstrap";

// const pointer = {
//   cursor: "pointer",
// };

//Este componente podria ir dentro de List.js y llamarlo desde dentro tambien
const Item = ({
  id,
  work,
  state,
  editMode,
  deleteActivity,
  editActivity,
  changeActivity,
}) => {
  const deleteWork = (e) => {
    const { id } = e.target;
    console.log(id, { work });
    deleteActivity(id);
  };

  const editWork = (e) => {
    const { id } = e.target;
    console.log(work);

   editActivity(id, work);
  };

  const changeWork = (e) => {
    const { id } = e.target;
    //id.state = true;
    console.log(id, work);
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
            defaultChecked={state}
            onClick={changeWork}
          />
          {work}
        </Col>
        <Col md={1}>
          <button
            id={id}
            className="btn btn-success btn-sm"
            onClick={changeWork}
          >
            Finalizar
          </button>
          <button
            id={id}
            className="btn btn-warning btn-sm "
            onClick={editWork}
          >
            Editar
          </button>
          <button
            id={id}
            className="btn btn-danger btn-sm mr-2"
            onClick={deleteWork}
          >
            Eliminar
          </button>
        </Col>
      </Row>
    </Alert>
  );
};

export default Item;
