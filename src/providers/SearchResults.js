import { useState } from "react";
import { createContext } from "react";
import DATA from "../data";

export const RecipesContext = createContext(DATA);

export const SearchResults = createContext({
  search: "",
  onHandleChange: () => {},
});

const SearchResultsProvider = ({ children }) => {
  const [search, setSearch] = useState("");

  const onHandleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <SearchResults.Provider
      value={{
        search,
        onHandleChange,
      }}
    >
      {children}
    </SearchResults.Provider>
  );
};

export default SearchResultsProvider;
