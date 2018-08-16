import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Header';
import Body from './Body';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tareas: [],
      tarea: '',
    }
  }

  onChange = value => {
    this.setState({
      tarea: value,
    })
  }

  addTask = () =>
    this.setState({
      tareas: [...this.state.tareas, {tarea: this.state.tarea, key: Date.now()}],
      tarea: '',
    })

  render() {
    return (
      <View style={styles.container}>
        <Header tarea={this.state.tarea} onChange={this.onChange} addTask={this.addTask}/>
        <Body tareas={this.state.tareas}/>
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