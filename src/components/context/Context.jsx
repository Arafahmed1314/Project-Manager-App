/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer, useState } from "react";
import { initialStates, taskReducer } from "../../Reducer";

const ShowFormContext = createContext();
export const useShowFormModal = () => {
  return useContext(ShowFormContext);
};
const TaskContext = createContext();
export const useTaskContext = () => {
  return useContext(TaskContext);
};
const SearchContext = createContext();
export const useSearchContext = () => {
  return useContext(SearchContext);
};

// Initial state for the form
// const initialState = {
//   id: crypto.randomUUID(),
//   taskName: "",
//   description: "",
//   date: "",
//   category: "",
// };
const ShowFormModelProvider = ({ children }) => {
  const [showForm, setShowForm] = useState(false);
  // const [value, setValue] = useState([initialState]);
  const [updateValue, setUpdateValue] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  const [state, dispatch] = useReducer(taskReducer, initialStates);
  return (
    <ShowFormContext.Provider
      value={{
        showForm,
        setShowForm,
        updateValue,
        setUpdateValue,
      }}
    >
      <TaskContext.Provider value={{ state, dispatch }}>
        <SearchContext.Provider value={{ searchValue, setSearchValue }}>
          {children}
        </SearchContext.Provider>
      </TaskContext.Provider>
    </ShowFormContext.Provider>
  );
};

export { ShowFormContext, ShowFormModelProvider, SearchContext, TaskContext };
