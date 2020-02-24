import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const ComponentScreen = () =>{
  const name = 'Diego';
 return (
 <View>
     <Text style={styles.textStyle}>Fundamentos React Native</Text>
 <Text style={styles.subHeaderStyle}>My Name is {name}</Text>
 </View>);
};

const styles = StyleSheet.create({
        textStyle: { fontSize:45, color: 'green',textAlign:'center'},
        subHeaderStyle:{
          fontSize: 20,
          color: 'red',
          textAlign: "center"
        }
      });

export default ComponentScreen;
