import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Text, FlatList } from 'react-native';


import Tarea from './Tarea';

const mapStateToProps = state => {
  return {
    tareas: state.tareas
  };
}

class Body extends Component {
  constructor(){
    super();
  }

  delTask = (key) => {
    this.props.delTarea(key);
  }

  render() {
  	const { tareas } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.innerContainer}>
      	 <Text style={styles.title}>Lista de Tareas: </Text>
      	</View>
        <View style={styles.innerContainer2}>
          <FlatList
            data={tareas}
            renderItem={({item}) => <Tarea item={item}/>}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
	container: {
		flex: 7,
		justifyContent: 'flex-start',
		backgroundColor: '#98FB98',
	},
  innerContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',  
  },
  innerContainer2: {
    flex: 9,
    justifyContent: 'flex-start',
  },
  title: {
    flex: 1,
    fontSize: 16,
    paddingHorizontal: 16,
  }
});


export default connect(mapStateToProps)(Body);