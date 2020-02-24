import {StyleSheet, TextInput, Button, View, FlatList} from 'react-native';
import React, {useState} from 'react';
import NameItem from './components/NameItem'

const App: ()=>React$Node = () => {
    const [enteredName, setEnteredName] = useState('')
    const [names, setNames] = useState([])

    const nameInputHandler =(enteredText) =>{
        setEnteredName(enteredText)
    }

    const addNameHandler =() =>{
        setNames(currentNames =>[...currentNames, {id: Math.random().toString(), value: enteredName}])
    }

  return (
      <View style={styles.containerStyle}>
          <View style={styles.inputWrapperStyle}>
              <TextInput style={styles.inputStyle} placeholder={"Ingrese un Nombre"} onChangeText={nameInputHandler} value={enteredName} />
              <Button title={"Agregar"} onPress={addNameHandler}/>
          </View>
          <FlatList keyExtractor={(item) =>item.id}
              data={names} renderItem={itemData =>(
                <NameItem title={itemData.item.value}/>
          )} />
      </View>
  );
};


const styles = StyleSheet.create({
    inputStyle: {width:'60%', color: 'green', padding: 20},
    inputWrapperStyle:{flexDirection: 'row',justifyContent: 'space-between', alignItems: 'center'},
    containerStyle:{
        padding: 40
    },

});

export default App;

/*
*
* import React from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation'
import ComponentScreen from './screens/ComponentScreen';
import HomeScreen from './screens/HomeScreen'
import ListScreen from './screens/ListScreen';

const navigator = createStackNavigator(
    {
        Home:HomeScreen,
        Components:ComponentScreen,
        List: ListScreen
    },{
        initialRouteName: 'Home',
        defaultNavigationOptions:{
            title: 'App'
        }
    }

);


export default navigator;
*/