import { ADD_WORK, UPDATE_WORK, DELETE_WORK, GET_WORK } from "./actions";

const initialState = tasks[{id: "", description: "", state: false}];

export function todoReducer (state = initialState, actions) {
    switch (actions.type) {
        case ADD_WORK:
            
            return;
        case DELETE_WORK:
            
            return;

        case UPDATE_WORK:
            
            return;

        case GET_WORK:
            
            return;

        default:
            return state;
    }



}