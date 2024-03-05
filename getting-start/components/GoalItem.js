import React from "react";
import { View, Text, StyleSheet } from "react-native";

function GoalItem({ item }) {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{item.goal}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "white",
  },
});

export default GoalItem;
