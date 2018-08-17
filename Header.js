'use strict';

import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
      	<Text>Header</Text>
      	<TextInput
      		style={styles.texto}
      		placeholder="Escribe aqui la tarea..."
      		value={this.props.tarea}
      		onChangeText={value => this.props.onChange(value)}
      		onSubmitEditing={()=> this.props.addTask()}
      	/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
	container: {
		flex: 3,
		justifyContent: 'center',
		backgroundColor: '#00FF00',  
	},
	texto: {
		paddingHorizontal: 16,
		height: 40,
		fontSize: 24,
	}
});

export default Header;