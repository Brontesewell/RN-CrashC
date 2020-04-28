import React, { useState } from 'react';
import {Text, StyleSheet, View, TouchableOpacity } from 'react-native';


const GoalItem = props => {
   return ( 
        <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
            <View style={styles.listItem} o>
                <Text>{props.title}</Text>
            </View>
        </TouchableOpacity>
   )
}

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1, 
      }
})

export default GoalItem;