import { Button } from "antd";
import { createContext, useReducer } from "react";
const TodoAppContext = createContext({});

const TodoContext = ({ children }) => {
  const initialState = {
    data: JSON.parse(localStorage.getItem("todo")) || [],
  };
  const reducer = (state, { type, newTask, id, id2, new_text }) => {
    switch (type) {
      case "add":
        let newData = {
          data: [
            ...state.data,
            {
              ...newTask,
            },
          ],
        };
        localStorage.setItem("todo", JSON.stringify(newData.data));
        return newData;
      case "delete":
        let newDataDeleted = {
          data: state.data.filter((value) => value.id !== id),
        };

        return newDataDeleted;
      case "edit":
        let newUpdatedData = {
          data: state.data.map((value) =>
            value.id === id2 ? { ...value, task: new_text } : value
          ),
        };
        localStorage.setItem("todo", JSON.stringify(newUpdatedData.data));
        return newUpdatedData;
      default:
        break;
    }
  };
  const [data, dispatch] = useReducer(reducer, initialState);

  return (
    <TodoAppContext.Provider value={{ data, dispatch }}>
      {children}
    </TodoAppContext.Provider>
  );
};

export { TodoContext, TodoAppContext };
