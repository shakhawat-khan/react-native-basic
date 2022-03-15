import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  View,
  Button,
  Alert,
  TextInput,
  Text,
  ScrollView,
} from "react-native";

import { Colors } from "react-native/Libraries/NewAppScreen";

export default function App() {
  const [people, setPeople] = useState([
    { name: "sajjad", key: 1 },
    { name: "sristy", key: 2 },
    { name: "isty", key: 3 },
    { name: "shomonnoy", key: 4 },
    { name: "rifa", key: 5 },
    { name: "barsha", key: 6 },
    { name: "emum", key: 7 },
  ]);

  return (
    <View>
      <ScrollView>
        {people.map((item) => {
          return (
            <View key={item.key}>
              <Text style={styles.Item}>{item.name}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  input: {
    borderWidth: 3,
    borderColor: "#000000",
    padding: 8,
    margin: 5,
  },

  Item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: "pink",
    fontSize: 24,
  },
});

const styles1 = StyleSheet.create({
  bigBlue: {
    color: "blue",
    fontSize: 30,
    fontWeight: "bold",
  },

  darkblue: {
    color: "red",
    fontSize: 25,
    fontWeight: "300",
    fontStyle: "italic",
  },
});
