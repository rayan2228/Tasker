import { createContext, useContext } from "react";
import { initialData } from "../utils/data/initialData";
import { useReducer } from "react";
import TaskReducer from "../useReducers/TaskReducer";

export const TasksContext = createContext(null);
export const TaskReducerContext = createContext(null);

export default function TasksContextProvider({ children }) {
  const [state, dispatch] = useReducer(TaskReducer, initialData);
  return (
    <TasksContext.Provider value={initialData}>
      <TaskReducerContext.Provider value={dispatch}>
        {children}
      </TaskReducerContext.Provider>
    </TasksContext.Provider>
  );
}

export const useTasks = () => useContext(TasksContext);
