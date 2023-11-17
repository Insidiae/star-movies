import * as React from "react";
import { StyleSheet, SafeAreaView, StatusBar } from "react-native";
import SearchResults from "@/components/SearchResults";

export default function HomePage() {
  return (
    <SafeAreaView style={styles.container}>
      <SearchResults term="star" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    ...(StatusBar.currentHeight
      ? { marginTop: StatusBar.currentHeight + 4 }
      : {}),
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
