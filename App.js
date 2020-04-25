import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';

export default function App() {
  const [enterGoal, setEnterGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

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

      <ScrollView>
          {courseGoals.map((goal) => (
          <View  key={goal} style={styles.listItem}>
            <Text>{goal}</Text>
            </View>
          ))}
      </ScrollView>
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
  },
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1, 
  }

});