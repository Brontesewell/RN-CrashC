import React, { useState } from 'react';
import {TextInput, StyleSheet, View, Button } from 'react-native';


const GoalInput = props => {
const [enterGoal, setEnterGoal] = useState('');

const goalInputHandler = (enteredText) => {
    setEnterGoal(enteredText);
  }
   return ( 
    <View style={styles.inputContainer}>
        <TextInput 
            placeholder="Course Goal" 
            style={styles.input} 
            onChangeText={goalInputHandler}
            value={enterGoal}
         />
         <Button title="ADD" onPress={() => props.onAddGoal(enterGoal)}/>
    </View>
   )
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center'
    },
    input: {
        width: '80%', 
        borderColor: 'black', 
        borderWidth: 1, 
        padding: 10
    },
})

export default GoalInput;