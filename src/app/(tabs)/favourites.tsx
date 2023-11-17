import * as React from "react";
import { StyleSheet, SafeAreaView, StatusBar } from "react-native";

import useFavourites from "@/utils/useFavourites";
import MovieList from "@/components/MovieList";
import { Text } from "react-native-paper";

export default function HomePage() {
  const { favourites } = useFavourites();

  return (
    <SafeAreaView style={styles.container}>
      {favourites.length > 0 ? (
        <MovieList data={favourites} />
      ) : (
        <Text>Add your favourite movies here!</Text>
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
    alignItems: "center",
    justifyContent: "center",
  },
});
