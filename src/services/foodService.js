import { sample_foods, sample_tags } from "../data";

export const getAll = async () => sample_foods;

export const search = async (searchTerm) =>
  sample_foods.filter((food) =>
    food.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

export const getAllTags = async () => sample_tags;

export const getAllByTags = async (tag) => {
  if (tag === "All") return getAll();
  return sample_tags.filter((item) => item.tags?.includes(tag));
};

export function getById(id) {
  const queriedFood = sample_foods.find((food) => food.id === id);
  console.log(queriedFood);
  return queriedFood;
}
