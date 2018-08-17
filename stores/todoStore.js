import { EventEmitter } from 'events';
import Dispatcher from '../dispatcher';
import ActionTypes from '../constants';

const CHANGE = 'CHANGE';
let _tareas = [];

class TodoStore extends EventEmitter {
	constructor() {
		super();
		// Registrar manejador de acción con el Dispatcher
		Dispatcher.register(this._registerToActions.bind(this));
	}
	// Switchea segun el tipo de accion cuando una acción es dispatched
	_registerToActions(action) {
		switch(action.actionType) {
			case ActionTypes.ADD_TAREA:
				this._addNewItem(action.payload);
			case ActionTypes.DEL_TAREA:
				this._delItem(action.payload);
			break;
		}
	}
	// añade nueva tarea a la lista y emite un evento CHANGED
	_addNewItem(item) {
		_tareas.push(item);
		this.emit(CHANGE);
	}
	// elimina una tarea por su key u emite un evento CHANGED
	_delItem(key) {
		_tareas = _tareas.filter(tarea => tarea.key != key);
		this.emit(CHANGE);
	}
	// devuelve las tareas en la lista
	getAllItems() {
		return _tareas;
	}
	// Crea al listener para el evento CHANGED
	addChangeListener(callback) {
		this.on(CHANGE, callback);
	}
	// Remueve el listener para el evento CHANGED
	removeChangeistener(callback) {
		this.removeListener(CHANGE, callback);
	}
}

export default new TodoStore;