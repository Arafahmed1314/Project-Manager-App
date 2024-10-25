/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const ShowFromContext = createContext();
export const useShowFormModal = () => {
  return useContext(ShowFromContext);
};
const SearchContext = createContext();

export const useSearchContext = () => {
  return useContext(SearchContext);
};

// Initial state for the form
const initialState = {
  id: crypto.randomUUID(),
  taskName: "",
  description: "",
  date: "",
  category: "",
};
const ShowFormModelProvider = ({ children }) => {
  const [showForm, setShowForm] = useState(false);
  const [value, setValue] = useState([initialState]);
  const [updateValue, setUpdateValue] = useState(null);
  const [searchValue, setSearchValue] = useState("");

  return (
    <ShowFromContext.Provider
      value={{
        showForm,
        setShowForm,
        value,
        setValue,
        updateValue,
        setUpdateValue,
      }}
    >
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        {children}
      </SearchContext.Provider>
    </ShowFromContext.Provider>
  );
};

export { ShowFromContext, ShowFormModelProvider, SearchContext };
