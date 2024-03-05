import { useState } from "react";
import { Button, TextInput, View, StyleSheet } from "react-native";

function GoalInput({ saveButtonHandler }) {
  const [goal, setGoal] = useState("");

  function inputHandler(text) {
    setGoal(text);
  }

  function addGoalHandler(e) {
    saveButtonHandler(goal);
    setGoal("");
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Your next goal!"
        style={styles.textInput}
        onChangeText={inputHandler}
        value={goal}
      />
      <Button title="Add Goal" onPress={addGoalHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
});

export default GoalInput;
