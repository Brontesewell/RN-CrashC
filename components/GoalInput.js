import React, { useState } from 'react';
import {TextInput, StyleSheet, View, Button, Modal } from 'react-native';


const GoalInput = props => {
const [enterGoal, setEnterGoal] = useState('');

const goalInputHandler = (enteredText) => {
    setEnterGoal(enteredText);
  }
   return ( 
       <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
            <TextInput 
            placeholder="Course Goal" 
            style={styles.input} 
            onChangeText={goalInputHandler}
            value={enterGoal}
             />
            <Button title="ADD" onPress={() => props.onAddGoal(enterGoal)}/>
            </View>
        </Modal>
   )
}

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center', 
        alignItems: 'center',
        flex: 1,
    },
    input: {
        width: '80%', 
        borderColor: 'black', 
        borderWidth: 1, 
        padding: 10
    },
})

export default GoalInput;