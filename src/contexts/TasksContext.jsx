import { createContext, useContext } from "react";
import { initialData } from "../utils/data/initialData";
import { useReducer } from "react";
import TaskReducer from "../useReducers/TaskReducer";

export const TasksContext = createContext(null);
export const TaskReducerContext = createContext(null);

export default function TasksContextProvider({ children }) {
  const [tasks, dispatch] = useReducer(TaskReducer, initialData);
  return (
    <TasksContext.Provider value={tasks}>
      <TaskReducerContext.Provider value={dispatch}>
        {children}
      </TaskReducerContext.Provider>
    </TasksContext.Provider>
  );
}

export const useTasks = () => {
  let { data, searchedData, searchValue } = useContext(TasksContext);
  if (searchValue) {
    return searchedData;
  }
  return data;
};
export const useDispatch = () => useContext(TaskReducerContext);
