import { ADD_TAREA, DEL_TAREA } from "../action-types/index";

const initialState = {
	tareas: []
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TAREA:
			return { ...state, tareas: [...state.tareas, action.payload] };
		case DEL_TAREA:
			return { ...state, tareas: [...state.tareas.filter(tarea => tarea.key !== action.payload)] };
		default:
			return state;
	}
};

export default rootReducer;