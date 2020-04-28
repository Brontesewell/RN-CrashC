import React, { useState } from 'react';
import {TextInput, StyleSheet, View, Button, Modal } from 'react-native';


const GoalInput = props => {
const [enterGoal, setEnterGoal] = useState('');

const goalInputHandler = (enteredText) => {
    setEnterGoal(enteredText);
  }

  const addGoalHandler = () => {
      props.onAddGoal(enterGoal);
      setEnterGoal('');
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
             <View style={styles.buttonContainer} >
                <View style={styles.button} >
                    <Button title="CANCEL" color='red' onPress={props.onCancel} />
                </View>
                <Button title="ADD" onPress={addGoalHandler}/>
            </View>
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
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '55%'
    },
    button: {
        width: '40%'
    }
})

export default GoalInput;