import React from "react";
import {SafeAreaView, StatusBar} from "react-native";
import AppBar from "./src/components/AppBar";
import Todo from "./src/screens/Todo";
import Colors from "./src/utils/Colors";

const  App = () => {
  return (
      <SafeAreaView style={{flex: 1}}>
        <StatusBar backgroundColor={Colors.primary} barStyle="light-content"  />
        <AppBar />
        <Todo />
      </SafeAreaView>
  );
}

export default App
