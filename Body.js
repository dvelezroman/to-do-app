import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Text, FlatList, AsyncStorage } from 'react-native';
//FLUX STORE
import TodoStore from './stores/todoStore';
import TodoActions from './actions/todoActions';
//FLUX STORE
import Tarea from './Tarea';

const mapStateToProps = state => {
  return {
    tareas: state.tareas
  };
}

class Body extends Component {
  constructor(){
    super();
    this.state = {
      tareas: [],
      fetched: false,
    };
    this._onChange = this._onChange.bind(this);
  }
// FLUX cada vez que cambie la lista de tareas, se dispara este evento y actualiza la lista de tareas
  _onChange() {
    this.setState({ tareas: TodoStore.getAllItems() });
  }

  componentWillMount() {
    TodoStore.addChangeListener(this._onChange);
  }

  componentDidMount() {// saca del AsyncStorage
    AsyncStorage.getItem('@AppMobileTODO:tareas')
    .then(data => JSON.parse(data))
    .then(tareas => {
      for (let i=0; i< tareas.length; i++){
        TodoActions.addNewItem(tareas[i]);
      }
    })
    .catch(err => console.log(err));
  }
  
  componentWillUnmount() {
      TodoStore.removeChangeListener(this._onChange);
  }

  render() {
  	//const { tareas } = this.props;
    const { tareas } = this.state;
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


//export default connect(mapStateToProps)(Body);

// export para flux es normal
export default Body;