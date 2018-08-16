import React, { Component } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';

import Tarea from './Tarea';

class Body extends Component {
  render() {
  	const { tareas } = this.props;
    return (
      <View style={styles.container}>
      	<Text>Lista de Tareas: </Text>
      	<FlatList
      		data={tareas}
      		renderItem={({item}) => <Tarea item={item}/>}
      	/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
	container: {
		flex: 7,
		alignItems: 'center',
		justifyContent: 'flex-start',
		backgroundColor: '#98FB98',
	},
});


export default Body;