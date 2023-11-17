import { useSelector, useDispatch } from "react-redux";
import {
  selectFavouritesSlice,
  addFavourite,
  removeFavourite,
} from "@/store/favourites/favouritesSlice";
import { type Movie } from "@/store/types";

export default function useFavourites() {
  const favourites = useSelector(selectFavouritesSlice);

  const dispatch = useDispatch();

  function isFavourite(item: Movie) {
    return !!favourites.find((movie) => {
      if (item.trackId) {
        return movie.trackId === item.trackId;
      }
      return movie.collectionId === item.collectionId;
    });
  }

  function toggleFavourite(item: Movie) {
    if (!isFavourite(item)) {
      dispatch(addFavourite(item));
    } else {
      dispatch(removeFavourite(item));
    }
  }

  return { favourites, isFavourite, toggleFavourite };
}
