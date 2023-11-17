import * as React from "react";
import { useLocalSearchParams, Stack } from "expo-router";
import { Image } from "expo-image";
import { MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, View, ScrollView, Pressable } from "react-native";
import { Text, Card } from "react-native-paper";

import { useGetMovieDetailQuery } from "@/store/services/api";
import useFavourites from "@/utils/useFavourites";

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

export default function MovieDetailsPage() {
  const { id } = useLocalSearchParams();
  const { data } = useGetMovieDetailQuery(id as string);

  const { isFavourite, toggleFavourite } = useFavourites();

  if (data && data.resultCount > 0) {
    const item = data.results[0];
    const isFavouriteItem = isFavourite(item);

    let description = "This item has no description.";
    if (item.longDescription) {
      description = item.longDescription;
    } else if (item.description) {
      description = item.description;
    } else if (item.shortDescription) {
      description = item.shortDescription;
    }

    return (
      <View style={styles.container}>
        <Stack.Screen
          options={{
            headerShown: true,
            title: `${item.collectionName || item.trackName}`,
            presentation: "fullScreenModal",
          }}
        />
        <ScrollView
          contentContainerStyle={{
            paddingBottom: 16,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Card style={styles.movieCard}>
            <Card.Content style={{ flex: 1 }}>
              <View style={styles.movieCardHeader}>
                <Image
                  style={styles.artwork}
                  source={item.artworkUrl100 ?? item.artworkUrl60}
                  placeholder={blurhash}
                  contentFit="cover"
                  transition={1000}
                />
                <View style={{ flex: 1 }}>
                  <Text variant="titleMedium">
                    {item.collectionName || item.trackName}
                  </Text>
                  <Text variant="titleSmall">{item.primaryGenreName}</Text>
                  <Text variant="titleSmall">
                    {item.currency} ${item.collectionPrice}
                  </Text>
                </View>
                <Pressable
                  onPress={() => toggleFavourite(item)}
                  style={styles.favouritesButton}
                >
                  <MaterialIcons
                    name={isFavouriteItem ? "star" : "star-outline"}
                    size={32}
                    color={isFavouriteItem ? "#fbbf24" : "#94a3b8"}
                  />
                </Pressable>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Text>{description}</Text>
              </View>
            </Card.Content>
          </Card>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  movieCard: {
    maxWidth: "95%",
    height: "auto",
    marginTop: 32,
    paddingBottom: 16,
  },
  movieCardHeader: {
    flexDirection: "row",
    width: "100%",
    gap: 16,
    paddingBottom: 16,
  },
  artwork: {
    width: 64,
    height: 64,
    borderRadius: 4,
  },
  favouritesButton: {
    alignSelf: "flex-start",
  },
});
