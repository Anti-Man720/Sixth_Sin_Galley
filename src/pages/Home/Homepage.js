import React, { useEffect, useReducer } from "react";
import { useParams } from "react-router-dom";
import Tags from "../../components/Tags/Tags";
import Search from "../../components/Search/Search";
import Thumbnails from "../../components/Thumbnails/Thumbnails";
import {
  getAll,
  getAllTags,
  getAllByTags,
  search,
} from "../../services/foodService";
import NotFound from "../../components/NotFound/NotFound";

export default function Homepage() {
  console.log("Homepage mounted");
  const { searchTerm, tag } = useParams();
  const initialState = { foods: [], tags: [] };
  console.log(searchTerm);
  const reducer = (state, action) => {
    switch (action.type) {
      case "FOODS_UP":
        return { ...state, foods: action.payload };
      case "TAGS_UP":
        return { ...state, tags: action.payload };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const { foods, tags } = state;

  const [forFoodPage, setforFoodPage] = React.useState(false);

  useEffect(() => {
    getAllTags().then((tags) => dispatch({ type: "TAGS_UP", payload: tags }));

    const loadFoods = tag
      ? getAllByTags(tag)
      : searchTerm
      ? search(searchTerm)
      : getAll();

    loadFoods.then((foods) => dispatch({ type: "FOODS_UP", payload: foods }));
    setforFoodPage(true);
  }, [searchTerm, tag]);

  return (
    <div className="homepage-wrapper">
      <Search />
      <Tags tags={tags} forFood={forFoodPage} />
      {foods.length === 0 && <NotFound linkText="Reset Search" />}
      <Thumbnails foods={foods} />
    </div>
  );
}
