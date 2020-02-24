import React from 'react'
import {Text, View, StyleSheet} from "react-native";

const NameItem = props =>{

    return(
        <View style={styles.listItem}>
            <Text>{props.title}</Text>
        </View>
    );

};
const styles = StyleSheet.create({
    listItem:{
        padding: 10,
        backgroundColor: '#8bc34a',
        borderColor: '#4bc34a',
        borderWidth: 1,
        marginVertical: 10
    }
});
export default NameItem