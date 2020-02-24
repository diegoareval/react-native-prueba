import React from 'react';
import {Text, StyleSheet, View, TextInput, Button} from 'react-native';

const ListScreen = () =>{
return (
    <View>
    <View style={styles.inputWrapperStyle}>
        <TextInput style={styles.inputStyle} placeholder={"Ingrese un Nombre"}/>
        <Button title={"Agregar"}/>
    </View>
</View>)
}

const styles = StyleSheet.create({
    inputStyle: {width:'70%', color: 'green', padding: 30},
    inputWrapperStyle:{flexDirection: 'row',justifyContent: 'space-between', alignItems: 'center'},
    titleStyle:{color: 'green', textAlign: 'center', fontSize: 15, marginBottom: 5},
    subtitleStyle: {fontSize: 10, textAlign: 'center'},
    sendStyle:{marginTop:100},
    titleSectionStyle:{marginBottom:20}
});

export default ListScreen;