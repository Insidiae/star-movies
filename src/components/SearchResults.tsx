import * as React from "react";
import { Text } from "react-native-paper";

import { useGetStarMoviesQuery } from "@/store/services/api";
import MovieList from "./MovieList";

export default function SearchResults({ term = "" }: { term: string }) {
  const { data, error, isLoading } = useGetStarMoviesQuery(term);

  // React.useEffect(() => {
  //   if (data) {
  //     console.log(data);
  //   }
  // }, [data]);

  return (
    <>
      {isLoading ? <Text>Loading...</Text> : null}
      {error ? <Text>Error fetching data.</Text> : null}
      {data ? <MovieList data={data.results} /> : null}
    </>
  );
}
