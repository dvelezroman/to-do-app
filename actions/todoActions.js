import Dispatcher from '../dispatcher';
import ActionTypes from '../constants';

class TodoActions {
	// acción para añadir una tarea a la lista
	addNewItem(item) {
		Dispatcher.dispatch({
			actionType: ActionTypes.ADD_TAREA,
			payload: item
		});
	}
	// acción para eliminar una tarea de la lista
	delItem(key) {
		Dispatcher.dispatch({
			actionType: ActionTypes.DEL_TAREA,
			payload: key
		});
	}
}

export default new TodoActions();