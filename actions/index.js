import { ADD_TAREA, DEL_TAREA } from '../action-types/index';

export const addTarea = tarea => ({ type: ADD_TAREA, payload: tarea });

export const delTarea = key => ({ type: DEL_TAREA, payload: key });