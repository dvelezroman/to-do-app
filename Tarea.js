import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

class Tarea extends Component {
  render() {
    return (
      <View style={styles.container}>
      	<Text style={styles.texto}>{this.props.item.tarea}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	texto: {
		fontSize: 24,
	}
});


export default Tarea;