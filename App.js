import { useState } from "react";
import CounterButton from "./components/counterButton";

const { View, Text, SafeAreaView, StyleSheet, Button } = require("react-native")

const App = () => {
  const [count, setCount] = useState(0);

  function incrementCount() {
    setCount(count + 1);
  }

  function decrementCount() {
    setCount(count - 1);
  }

  return <>
  <SafeAreaView />
  <View style={styles.root}>
    <Text style={styles.title}>You have pressed the counter button {count} times</Text>
    <View style={styles.buttonLayout}>
      <CounterButton title="-" onPress={decrementCount} />
      <CounterButton title="+" onPress={incrementCount} />
    </View>
  </View>
  </>

}

const styles = StyleSheet.create({
  root : {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title : {
    fontWeight: '500',
  },
  buttonLayout : {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  }
});

export default App;