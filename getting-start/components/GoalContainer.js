import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import GoalItem from "./GoalItem";

function GoalContainer({ data: goalsList }) {
  return (
    <View style={styles.goalsContainer}>
      <FlatList
        data={goalsList}
        renderItem={({ item }) => <GoalItem item={item} />}
        keyExtractor={(item) => {
          return item.id;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  goalsContainer: {
    flex: 5,
  },
});

export default GoalContainer;
