import * as React from "react";
import { Link } from "expo-router";
import { Image } from "expo-image";
import { MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, FlatList, View, Pressable } from "react-native";
import { Card, Button, Text } from "react-native-paper";

import useFavourites from "@/utils/useFavourites";
import { type Movie } from "@/store/types";

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

export default function MovieList({ data }: { data: Movie[] }) {
  const { isFavourite, toggleFavourite } = useFavourites();

  return (
    <FlatList
      data={data}
      contentContainerStyle={styles.movieListContainer}
      renderItem={({ item }) => {
        const isFavouriteItem = isFavourite(item);

        let description = "This item has no description.";
        if (item.shortDescription) {
          description = item.shortDescription + "...";
        } else if (item.description) {
          description = item.description.slice(0, 100) + "...";
        } else if (item.longDescription) {
          description = item.longDescription.slice(0, 100) + "...";
        }

        return (
          <Card style={styles.movieCard}>
            <Card.Content style={styles.movieCardContent}>
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
              <Text variant="titleSmall">{item.primaryGenreName}</Text>
              <Text>{description}</Text>
              <Text variant="titleMedium" style={styles.moviePrice}>
                {item.currency} ${item.collectionPrice}
              </Text>
            </Card.Content>
            <Card.Actions>
              <Link
                href={`/movie/${item.trackId ?? item.collectionId}`}
                asChild
              >
                <Button mode="contained">View Details</Button>
              </Link>
            </Card.Actions>
          </Card>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  movieListContainer: {
    alignItems: "center",
    paddingBottom: 64,
  },
  movieCard: {
    maxWidth: "95%",
    height: "auto",
    marginVertical: 16,
    paddingBottom: 4,
  },
  movieCardContent: {
    gap: 8,
    marginBottom: 8,
  },
  movieCardHeader: {
    flexDirection: "row",
    width: "100%",
    gap: 16,
    marginBottom: 16,
  },
  artwork: {
    width: 64,
    height: 64,
    borderRadius: 4,
  },
  favouritesButton: {
    alignSelf: "flex-start",
  },
  moviePrice: {
    alignSelf: "flex-end",
  },
});
