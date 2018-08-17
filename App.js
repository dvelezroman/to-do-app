import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import { addTarea, delTarea } from './actions/index';

import Header from './Header';
import Body from './Body';

const mapStateToProps = state => {
  return { tareas: state.tareas };
}

const mapDispatchToProps = dispatch => {
  return {
    addTarea: tarea => dispatch(addTarea(tarea)),
    delTarea: key => dispatch(delTarea(key))
  };
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tarea: '',
    };
  }

  onChange = value => {
    this.setState({
      tarea: value,
    })
  }

  addTask = () => {
    this.props.addTarea({ key: Date.now().toString(), tarea: this.state.tarea, completed: false });
    this.setState({ tarea: '' });
  }

  render() {
    return (
      <View style={styles.container}>
        <Header tarea={this.state.tarea} onChange={this.onChange} addTask={this.addTask}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(App);