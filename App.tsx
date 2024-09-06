import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

interface Workout {
  id: number;
  name: string;
  duration: string;
  caloriesBurned: string;
  type: string;
}

const workoutTypes = ['Cardio', 'Strength', 'Flexibility'];

const App = () => {
  const [workoutName, setWorkoutName] = useState<string>('');
  const [duration, setDuration] = useState<string>('');
  const [caloriesBurned, setCaloriesBurned] = useState<string>('');
  const [workoutType, setWorkoutType] = useState<string>('');
  const [workouts, setWorkouts] = useState<Workout[]>([]);

  const addWorkout = () => {
    if (workoutName && duration && caloriesBurned && workoutType) {
      const newWorkout: Workout = {
        id: workouts.length + 1,
        name: workoutName,
        duration,
        caloriesBurned,
        type: workoutType,
      };
      setWorkouts([...workouts, newWorkout]);
      clearForm();
    }
  };

  const clearForm = () => {
    setWorkoutName('');
    setDuration('');
    setCaloriesBurned('');
    setWorkoutType('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Fitness Tracker</Text>

      <TextInput
        style={styles.input}
        placeholder="Workout Name"
        value={workoutName}
        onChangeText={setWorkoutName}
        autoFocus={true}
      />

      <TextInput
        style={styles.input}
        placeholder="Duration (in minutes)"
        value={duration}
        onChangeText={setDuration}
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        placeholder="Calories Burned"
        value={caloriesBurned}
        onChangeText={setCaloriesBurned}
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        placeholder="Type of Workout (Cardio, Strength, Flexibility)"
        value={workoutType}
        onChangeText={setWorkoutType}
      />

      <Button title="Add Workout" onPress={addWorkout} />

      <FlatList
        data={workouts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.workoutItem}>
            <Text>{item.name}</Text>
            <Text>Duration: {item.duration} min</Text>
            <Text>Calories: {item.caloriesBurned} kcal</Text>
            <Text>Type: {item.type}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  workoutItem: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
  },
});

export default App;
