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

	_registerToActions(action) {
		switch(action.actionType) {
			case ActionTypes.ADD_TAREA:
				this._addNewItem(action.payload);
			case ActionTypes.DEL_TAREA:
				this._delItem(action.payload);
			break;
		}
	}
	_addNewItem(item) {
		_tareas.push(item);
		this.emit(CHANGE);
	}

	_delItem(key) {
		_tareas = _tareas.filter(tarea => tarea.key != key);
		this.emit(CHANGE);
	}

	getAllItems() {
		return _tareas;
	}

	addChangeListener(callback) {
		this.on(CHANGE, callback);
	}

	removeChangeistener(callback) {
		this.removeListener(CHANGE, callback);
	}
}

export default new TodoStore;