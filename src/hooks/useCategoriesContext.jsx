import { useContext } from "react";
import { CategoriesContext } from "../contexts/categoriesContext";

const useCategoriesContext = () => {
  return useContext(CategoriesContext);
};

export default useCategoriesContext;
