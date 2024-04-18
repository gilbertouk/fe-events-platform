import { createContext, useEffect, useState } from "react";

import { api } from "../services/api";

export const CategoriesContext = createContext(null);
CategoriesContext.displayName = "Categories Context";

const CategoriesProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [isLoadingCategories, setIsLoadingCategories] = useState(true);

  useEffect(() => {
    api
      .get("/categories")
      .then((response) => {
        setCategories(response.data.body);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoadingCategories(false);
      });
  }, []);

  return (
    <CategoriesContext.Provider value={{ categories, isLoadingCategories }}>
      {children}
    </CategoriesContext.Provider>
  );
};

export default CategoriesProvider;
