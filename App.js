import React from "react";
import {
  StyleSheet,
  View,
} from "react-native";
import AppBar from "./src/components/AppBar";
import Todo from "./src/screens/Todo";

const  App = () => {
  return (
      <View style={{flex: 1}}>
        <View style={styles.statusBar} />
        <AppBar />
        <Todo />
      </View>
  );
}

export default App

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: "#7F39FB",
    color: "#fff",
    width: "100%",
    height: 30
  }
});
