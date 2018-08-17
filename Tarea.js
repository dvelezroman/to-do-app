import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { delTarea } from './actions/index';

const mapDispatchToProps = dispatch => {
  return {
    delTarea: key => dispatch(delTarea(key))
  };
}

class Tarea extends Component {
  delTask = (key) => {
    this.props.delTarea(key);
  }

  render() {
    return (
      <View style={styles.container}>
      	<Text style={styles.texto}>{this.props.item.tarea}</Text>
        <TouchableOpacity onPress={() => this.delTask(this.props.item.key)}>
          <Ionicons 
            name="md-trash"
            size={24}
            color="gray"
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,  
	},
	texto: {
		fontSize: 24,
	}
});


export default connect(null,mapDispatchToProps)(Tarea);