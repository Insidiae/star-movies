import * as React from "react";
import { StyleSheet, Text, SafeAreaView, View, StatusBar } from "react-native";
import { TextInput } from "react-native-paper";

import SearchResults from "@/components/SearchResults";

export default function HomePage() {
  const [term, setTerm] = React.useState("");

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        label="Search"
        value={term}
        onChangeText={(text) => setTerm(text)}
        style={styles.searchBar}
      />
      {term ? (
        <SearchResults term={term} />
      ) : (
        <View style={styles.fillContainer}>
          <Text>Search Movies</Text>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    ...(StatusBar.currentHeight
      ? { marginTop: StatusBar.currentHeight + 4 }
      : {}),
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  searchBar: {
    width: "90%",
  },
  fillContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
