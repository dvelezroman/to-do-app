import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './Header';
import Body from './Body';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tareas: [],
      tarea: '',
  }

  onChange = value => {
    this.setState({
      tarea: value,
    })
  }

  addTask = () =>
    this.setState({
      tareas: [...this.state.tareas, { key: Date.now(), tarea: this.state.tarea, completed: false }],
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

export default App;