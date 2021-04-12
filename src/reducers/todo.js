//import { ADD_WORK, UPDATE_WORK, DELETE_WORK, GET_WORK } from "./actions";

export const ADD_WORK = "ADD_WORK";
export const DELETE_WORK = "DELETE_WORK";
export const UPDATE_WORK = "UPDATE_WORK";
export const EDIT_WORK = "EDIT_WORK";
const GET_WORK = "GET_WORK"; //

// export const initialState = {
//   id: "",
//   work: "",
//   fecha: new Date(),
//   editMode: false,
//   state: false,
// };

export function todoReducer(state = [], action) {
  switch (action.type) {
    case ADD_WORK:
      return [...state, action.payload];

    case DELETE_WORK:
      return action.payload;

    case UPDATE_WORK:
      return action.payload;

    case EDIT_WORK:
      return action.payload;

    case GET_WORK:
      return;

    default:
      return state;
  }
}
