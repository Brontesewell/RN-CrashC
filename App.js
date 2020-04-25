import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
// import { set } from 'badgin/build/favicon';

export default function App() {
  const [enterGoal, setEnterGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState('');

const goalInputHandler = (enteredText) => {
  setEnterGoal(enteredText);
}

const addGoalHandler = () => {
    setCourseGoals(currentGoals => [...courseGoals, enterGoal]);
}

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
          <TextInput 
          placeholder="Course Goal" 
          style={styles.input} 
          onChangeText={goalInputHandler}
          value={enterGoal}
          />
          <Button title="ADD" onPress={addGoalHandler}/>
      </View>

      <View>
          {courseGoals.map((goal) => <Text key={goal}>{goal}</Text>)}
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  screen:{
    padding: 50
  },
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
  }

});