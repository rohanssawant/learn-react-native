import { useState } from "react";
import { StyleSheet, View } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalContainer from "./components/GoalContainer";

export default function App() {
  const [goalsList, setGoalsList] = useState([]);
  function saveButtonHandler(goal) {
    setGoalsList((prevGoals) => [
      ...prevGoals,
      { id: Math.random().toString(), goal },
    ]);
  }
  return (
    <View style={styles.appContainer}>
      <GoalInput saveButtonHandler={saveButtonHandler} />
      <GoalContainer data={goalsList} />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
});
