import { createContext, useState } from "react";

const ModalAppContext = createContext({});

const ModalContext = ({ children }) => {
  const [editModalVisibility, setEditModalVisiblty] = useState(false);

  return (
    <ModalAppContext.Provider
      value={{ editModalVisibility, setEditModalVisiblty }}
    >
      {children}
    </ModalAppContext.Provider>
  );
};

export { ModalAppContext, ModalContext };
