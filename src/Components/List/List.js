import Item from "./Item";

// const items = [
//     {id: 1, work: "aprender algo", state:false},
//     {id: 2, work: "comer", state: true},
//     {id: 3, work: "salir", state:false}
// ];

const List = ({ activities, deleteActivity, editActivity, changeActivity }) => {
  return (
    <>
      {activities.length === 0 && <h4>No hay tareas</h4>}
      <h3 className="text-center">Tareas pendientes</h3>
      {activities.map(
        (item) =>
          !item.state && (
            <Item
              key={item.id}
              {...item}
              deleteActivity={deleteActivity}
               editActivity={editActivity}
              changeActivity={changeActivity}
            />
          )
      )}

      <h3 className="text-center">Tareas finalizadas</h3>
      {activities.map(
        (item) =>
          item.state && (
            <Item
              key={item.id}
              {...item}
              deleteActivity={deleteActivity}
              editActivity={editActivity}
              changeActivity={changeActivity}
            />
          )
      )}
    </>
  );
};

// //Este componente podria ir aparte como Item.js
// const Item = ({id, work, state}) => {
//     const deleteWork = (e) => {
//         console.log("Borrar");

//     };
//     return (
//         <h4 onDoubleClick={deleteWork} key={id}>
//             {id} - {work} - {state ? "Cumplido" : "Pendiente"}
//         </h4>
//     );
// };

export default List;
