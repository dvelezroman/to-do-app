import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//REDUX
import { connect } from 'react-redux';
import { addTarea, delTarea, fetchTareas } from './actions/index';
// REDUX
// --------------------------------------------
// FLUX
import TodoStore from './stores/todoStore';
import TodoActions from './actions/todoActions';
// FLUX


import Header from './Header';
import Body from './Body';
// REDUX STATE AND  DISPATCH
const mapStateToProps = state => {
  return { tareas: state.tareas };
}

const mapDispatchToProps = dispatch => {
  return {
    addTarea: tarea => dispatch(addTarea(tarea)),
    delTarea: key => dispatch(delTarea(key))
  };
}
// REDUX -------------------------------------
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tarea: '',
      fetching: false,
    };
  }

  onChange = value => {
    this.setState({
      tarea: value,
    })
  }
  // FLUX FUNCTIONS
  _addTask = () => {
    TodoActions.addNewItem({ 
      key: Date.now().toString(),
      tarea: this.state.tarea,
      completed: false
    });
    this.setState({ tarea: '' });
  }
  //FLUX FUNCTIONS
  //---------------------
  //REDUX FUNCTIONS
  addTask = () => {
    this.props.addTarea({ key: Date.now().toString(), tarea: this.state.tarea, completed: false });
    this.setState({ tarea: '' });
  }

  // FLUX neceista que se declare el listener para que escuche los cambios

  render() {
    return (
      <View style={styles.container}>
        <Header tarea={this.state.tarea} onChange={this.onChange} addTask={this._addTask}/>
        <Body />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

//export default connect(mapStateToProps, mapDispatchToProps)(App);

// Flux export
export default App;